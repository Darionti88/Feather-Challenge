import { gql } from "@apollo/client";

export const ALL_POLICIES = gql`
  query {
    allPolicies {
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
    policiesCount
  }
`;
export const FILTERED_POLICIES = gql`
  query filterPolicies($filter: String) {
    filterPolicies(filter: $filter) {
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
