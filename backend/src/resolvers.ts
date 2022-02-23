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
      if (!policies) throw new Error("Oops, we found nothing. Try Refreshing");
      return policies;
    },
    async getPolicy(_: ParentNode, args: { policyNumber: number }) {
      const policy = await context.prisma.policy.findUnique({
        where: {
          policyNumber: args.policyNumber,
        },
        include: { customer: true },
      });
      if (!policy)
        throw new Error(
          "Oops, couldn't find that Policy, try with another one."
        );
      return policy;
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
        const customer = await context.prisma.customer.update({
          where: { policyId: args.policyNumber },
          data: { policyId: args.edit.policyNumber },
        });
        if (!customer)
          throw new Error("Could not find this customer, try refreshing");
        const updatedPolicy = await context.prisma.policy.update({
          where: { policyNumber: args.policyNumber },
          data: args.edit,
        });
        if (!updatedPolicy) throw new Error("This policy does not exists");

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
