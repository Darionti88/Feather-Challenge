import { gql } from "@apollo/client";

export const ALL_POLICIES = gql`
  query allPolicies($orderBy: PolicyOrderByInput, $skip: Int, $take: Int) {
    allPolicies(orderBy: $orderBy, skip: $skip, take: $take) {
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

export const POLICY_ENUMS = gql`
  {
    __type(name: "PolicyStatus") {
      enumValues {
        name
      }
    }
  }
`;

export const GET_POLICY = gql`
  query getPolicy($policyNumber: Int) {
    getPolicy(policyNumber: $policyNumber) {
      provider
      customer {
        firstName
        lastName
        dateOfBirth
      }
      insuranceType
      status
      policyNumber
      startDate
      endDate
      createdAt
    }
  }
`;

export const GET_CUSTOMER = gql`
  query getPolicy($policyNumber: Int) {
    getPolicy(policyNumber: $policyNumber) {
      customer {
        firstName
        lastName
        dateOfBirth
      }
      status
      policyNumber
    }
  }
`;
