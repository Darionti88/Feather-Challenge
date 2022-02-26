import { gql } from "apollo-server";

export const typeDefs = gql`
  scalar Date

  input CustomerOrderByInput {
    lastName: Sort
  }

  input PolicyOrderByInput {
    customer: CustomerOrderByInput
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
    policyNumber: String
    startDate: Date
    endDate: Date
    createdAt: Date
  }

  type User {
    id: String!
    firstName: String
    lastName: String!
    email: String!
  }

  type Policy {
    provider: String!
    customer: Customer!
    insuranceType: InsuranceType!
    status: PolicyStatus
    policyNumber: Int!
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

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    policiesCount: Int!
    allPolicies(
      orderBy: PolicyOrderByInput
      skip: Int
      take: Int
      filter: PolicyStatus
      search: String
    ): [Policy]!
    getPolicy(policyNumber: Int): Policy!
  }

  type Mutation {
    editPolicy(edit: EditFieldByType, policyNumber: Int): Policy!
    register(
      email: String!
      password: String!
      firstName: String!
      lastName: String
    ): User!
    login(email: String!, password: String!): AuthPayload
  }
`;
