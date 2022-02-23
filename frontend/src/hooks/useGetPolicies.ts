import { useQuery } from "@apollo/client";
import { ALL_POLICIES } from "../graphql/querys";
import { Policies } from "../interfaces/allPolicies.interface";

export const useGetAllPolicies = () => {
  const { data, loading, error, refetch, fetchMore } = useQuery(ALL_POLICIES, {
    variables: { orderBy: {}, skip: 0, take: 5 },
  });
  const policies: Policies = data;
  return { policies, refetch, loading, error, fetchMore };
};
