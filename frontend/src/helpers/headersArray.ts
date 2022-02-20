import { Policies } from "../interfaces/allPolicies.interface";

export const getHeadersArray = (policyData: Policies) => {
  const headersArray = policyData?.allPolicies.reduce((acc: string[], curr) => {
    if (policyData.allPolicies.indexOf(curr) === 0) {
      return Object.keys(curr).slice(1);
    }
    return acc;
  }, []);
  return headersArray;
};
