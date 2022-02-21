import { useQuery } from "@apollo/client";
import { ALL_POLICIES, GET_CUSTOMER } from "../graphql/querys";
import { Policies } from "../interfaces/allPolicies.interface";

export const useGetAllPolicies = () => {
  const { data, loading, error, refetch } = useQuery(ALL_POLICIES);

  const policies: Policies = data;
  return { policies, refetch, loading, error };
};
