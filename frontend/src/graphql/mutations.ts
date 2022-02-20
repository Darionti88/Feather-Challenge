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
