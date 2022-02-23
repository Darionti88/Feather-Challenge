import { Customer, Policy, Prisma, Status } from "@prisma/client";
import { context, Context } from "./context";
import dateScalar from "./dateScalar";
import { policies } from "./mockData";

export const resolvers = {
  Date: dateScalar,
  Query: {
    async policiesCount() {
      const totalPolicies = await context.prisma.policy.findMany();
      return totalPolicies.length;
    },
    async allPolicies(
      _: ParentNode,
      args: {
        orderBy: Prisma.Enumerable<Prisma.PolicyOrderByWithRelationInput>;
        skip: number;
        take: number;
      }
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
    async getPolicy(_: ParentNode, args: { policyNumber: number }) {
      const customer = await context.prisma.policy.findUnique({
        where: { policyNumber: args.policyNumber },
        include: { customer: true },
      });
      return customer;
    },
  },
  Mutation: {
    editPolicy: async (
      _: ParentNode,
      args: {
        edit: { policyNumber: number; provider: string; endDate: Date };
        policyNumber: number;
      }
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
