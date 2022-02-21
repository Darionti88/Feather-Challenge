import { gql } from "apollo-server";

export const typeDefs = gql`
  scalar Date

  input PolicyOrderByInput {
    provider: Sort
    insuranceType: Sort
    status: Sort
    policyNumber: Sort
    startDate: Sort
    endDate: Sort
    createdAt: Sort
  }

  enum Sort {
    asc
    desc
  }

  input EditFieldByType {
    provider: String
    insuranceType: InsuranceType
    status: PolicyStatus
    policyNumber: Int
    startDate: Date
    endDate: Date
    createdAt: Date
  }

  type Policy {
    customer: Customer
    provider: String
    insuranceType: InsuranceType
    status: PolicyStatus
    policyNumber: Int
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
    DROPPED_OUT
  }

  type Query {
    allPolicies(orderBy: PolicyOrderByInput): [Policy]!
    getCustomer(policyId: Int): Customer!
  }

  type Mutation {
    editPolicy(edit: EditFieldByType, policyNumber: Int): Policy!
  }
`;
