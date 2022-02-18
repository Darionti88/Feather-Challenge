import { ApolloServer, gql } from "apollo-server";
import { ExpressionWithTypeArguments, HasTypeArguments } from "typescript";
import dateScalar from "./dateScalar";
import { lowerCasedValues } from "./helpers/getLowercasedValues";
import { policies } from "./mockData";

const typeDefs = gql`
  scalar Date

  type Policy {
    customer: Customer
    provider: String
    insuranceType: InsuranceType
    status: PolicyStatus
    policyNumber: String
    startDate: Date
    endDate: Date
    createdAt: Date
  }

  type Customer {
    firstName: String
    lastName: String
    dateOfBirth: Date
  }
  enum InsuranceType {
    LIABILITY
    HOUSEHOLD
    HEALTH
  }

  enum PolicyStatus {
    ACTIVE
    PENDING
    CANCELLED
    DROPPED
  }

  type Query {
    policiesCount: Int!
    allPolicies: [Policy]!
    filterPolicies(filter: String): [Policy]!
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Date: dateScalar,
  Query: {
    policiesCount: () => policies.length,
    allPolicies: () => policies,
    filterPolicies: (parent: ParentNode, args: { filter: string }) => {
      if (args.filter) {
        const filteredPolicies = policies?.filter((policy) => {
          const customerValues: (string | undefined)[] = lowerCasedValues(
            policy.customer
          );
          const policiesValues: (string | undefined)[] =
            lowerCasedValues(policy);
          let allValuesArr: (string | Date | undefined)[] = [
            ...policiesValues,
            ...customerValues,
          ];
          if (allValuesArr.includes(args.filter.toLowerCase())) {
            return policy;
          }
        });
        return filteredPolicies;
      }
      return policies;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
