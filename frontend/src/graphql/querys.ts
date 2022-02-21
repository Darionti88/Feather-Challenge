import { gql } from "@apollo/client";

export const ALL_POLICIES = gql`
  query allPolicies($orderBy: PolicyOrderByInput) {
    allPolicies(orderBy: $orderBy) {
      customer {
        firstName
        lastName
        dateOfBirth
      }
      provider
      insuranceType
      status
      policyNumber
      startDate
      endDate
      createdAt
    }
  }
`;

export const POLICY_ENUMS = gql`
  {
    __type(name: "PolicyStatus") {
      enumValues {
        name
      }
    }
  }
`;
