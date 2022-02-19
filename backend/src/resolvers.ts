import { context } from "./context";
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
};
