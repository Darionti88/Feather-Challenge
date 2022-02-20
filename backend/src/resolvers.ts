import { Customer, Policy, Prisma, Status } from "@prisma/client";
import { context, Context } from "./context";
import dateScalar from "./dateScalar";

export const resolvers = {
  Date: dateScalar,
  Query: {
    async allPolicies() {
      const policies = await context.prisma.policy.findMany({
        include: { customer: true },
      });
      if (!policies) return [];
      return policies;
    },
    async sortedPolicies(
      _: ParentNode,
      args: {
        orderBy: Prisma.Enumerable<Prisma.PolicyOrderByWithRelationInput>;
      }
    ): Promise<Policy[]> {
      const policies = await context.prisma.policy.findMany({
        orderBy: args.orderBy && args.orderBy,
        include: { customer: true },
      });
      if (!policies) return [];
      return policies;
    },
  },
  Mutation: {
    editPolicy: async (
      _: ParentNode,
      args: {
        edit: any;
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
        const updatedPolicy = await context.prisma.policy.update({
          where: { policyNumber: args.policyNumber },
          data: args.edit,
        });
        if (!updatedPolicy) return null;

        return updatedPolicy;
      }
    },
  },
};
