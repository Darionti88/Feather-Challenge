import { useQuery } from "@apollo/client";
import { POLICY_ENUMS } from "../graphql/querys";

export const useGetEnums = () => {
  const { data } = useQuery(POLICY_ENUMS);
  const statusEnums = data?.__type.enumValues;
  return statusEnums;
};
