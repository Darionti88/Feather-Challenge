// Generated by https://quicktype.io

export interface Policies {
  allPolicies: AllPolicy[];
  policiesCount: number;
}

export interface AllPolicy {
  customer: Customer;
  provider: string;
  insuranceType: string;
  status: string;
  policyNumber: string;
  startDate: string;
  endDate: string;
  createdAt: string;
}

export interface Customer {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}