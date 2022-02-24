import { gql } from "@apollo/client";

export const EDIT_POLICY = gql`
  mutation EditPolicy($policyNumber: Int!, $edit: EditFieldByType) {
    editPolicy(policyNumber: $policyNumber, edit: $edit) {
      provider
      policyNumber
      status
      insuranceType
      startDate
      endDate
      createdAt
    }
  }
`;

export const REGISTER = gql`
  mutation Register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      email
      firstName
      lastName
      id
    }
  }
`;
