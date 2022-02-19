import { Status } from "@prisma/client";
import { context, Context } from "./context";
import dateScalar from "./dateScalar";

export const resolvers = {
  Date: dateScalar,
  Query: {
    allPolicies: async () => {
      const policies = await context.prisma.policy.findMany({
        include: { customer: true },
      });
      return policies;
    },
  },
  Mutation: {
    editStatus: async (
      _parent: any,
      args: { policyNumber: number; status: Status }
    ) => {
      const policy = await context.prisma.policy.update({
        where: { policyNumber: args.policyNumber },
        data: { status: args.status },
      });
      if (!policy) return null;
      return policy;
    },
  },
};
