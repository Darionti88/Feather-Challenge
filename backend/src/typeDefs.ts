import { gql } from "apollo-server";

export const typeDefs = gql`
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
  }
`;
