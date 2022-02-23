import { Policy, Prisma } from "@prisma/client";
import { Context, context } from "./context";
import dateScalar from "./dateScalar";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { APP_SECRET } from "./utils/auth";
import { ArgumentNode } from "graphql";

export const resolvers = {
  Date: dateScalar,
  Query: {
    async policiesCount(_: ParentNode, _args: ArgumentNode, context: Context) {
      const totalPolicies = await context.prisma.policy.findMany();
      return totalPolicies.length;
    },
    async allPolicies(
      _: ParentNode,
      args: {
        orderBy: Prisma.Enumerable<Prisma.PolicyOrderByWithRelationInput>;
        skip: number;
        take: number;
      },
      context: Context
    ): Promise<Policy[]> {
      const policies = await context.prisma.policy.findMany({
        orderBy: args.orderBy && args.orderBy,
        skip: args.skip,
        take: args.take,
        include: { customer: true },
      });
      if (!policies) return [];
      return policies;
    },
    async getPolicy(
      _: ParentNode,
      args: { policyNumber: number },
      context: Context
    ) {
      const customer = await context.prisma.policy.findUnique({
        where: { policyNumber: args.policyNumber },
        include: { customer: true },
      });
      return customer;
    },
  },
  Mutation: {
    register: async (
      _: ParentNode,
      args: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
      },
      context: Context
    ) => {
      const { email, firstName, lastName } = args;
      const hashPassword = await bcrypt.hash(args.password, 10);
      const user = await context.prisma.user.create({
        data: { email, firstName, lastName, password: hashPassword },
      });
      return user;
    },
    login: async (
      _: ParentNode,
      args: { email: string; password: string },
      context: Context
    ) => {
      const user = await context.prisma.user.findUnique({
        where: { email: args.email },
      });
      if (!user) throw new Error("Invalid Credentials");
      const passwordMatch = await bcrypt.compare(args.password, user.password);
      if (!passwordMatch)
        throw new Error("Invalid Credentials, pleaste try again.");

      const token = jwt.sign({ id: user.id, email: user.email }, APP_SECRET);
      return { token, user };
    },
    editPolicy: async (
      _: ParentNode,
      args: {
        edit: { policyNumber: number; provider: string; endDate: Date };
        policyNumber: number;
      },
      context: Context
    ) => {
      const fieldToEdit = "policyNumber" in args.edit;
      if (fieldToEdit) {
        await context.prisma.customer.update({
          where: { policyId: args.policyNumber },
          data: { policyId: args.edit.policyNumber },
        });
        const updatedPolicy = await context.prisma.policy.update({
          where: { policyNumber: args.policyNumber },
          data: args.edit,
        });
        if (!updatedPolicy) return null;

        return updatedPolicy;
      } else {
        const dateField = "endDate" in args.edit;
        const formatToDate = new Date(args.edit.endDate);
        const updatedPolicy = await context.prisma.policy.update({
          where: { policyNumber: args.policyNumber },
          data: dateField ? { endDate: formatToDate } : args.edit,
        });
        if (!updatedPolicy) return null;

        return updatedPolicy;
      }
    },
  },
};
