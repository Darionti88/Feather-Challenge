import { useQuery } from "@apollo/client";
import { ALL_POLICIES } from "../graphql/querys";
import { Policies } from "../interfaces/allPolicies.interface";

export const useGetAllPolicies = () => {
  const { data, refetch } = useQuery(ALL_POLICIES);
  const policies: Policies = data;
  return { policies, refetch };
};