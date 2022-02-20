import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import arrowUp from "../../assets/icons/arrowUp.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";
import { formatString } from "../../helpers/formatString";
import { useLazyQuery, useQuery } from "@apollo/client";
import { ALL_POLICIES, SORTED_POLICIES } from "../../graphql/querys";
import { useGetAllPolicies } from "../../hooks/useGetPolicies";
import { Policies } from "../../interfaces/allPolicies.interface";

const Table = () => {
  // const [insurancePolicies, setInsurancePolicies] = useState<Policies>();
  // const { policies, refetch } = useGetAllPolicies();
  const { data, refetch } = useQuery(ALL_POLICIES);
  const policies: Policies = data;
  const [getSortedPolicies, result] = useLazyQuery(SORTED_POLICIES);
  const [orderAsc, setOrderAsc] = useState<boolean>();

  const headers: string[] | undefined = policies?.allPolicies.reduce(
    (acc: string[], curr) => {
      if (policies.allPolicies.indexOf(curr) === 0) {
        return Object.keys(curr).slice(1);
      }
      return acc;
    },
    []
  );

  const handleSort = (field: string) => {
    setOrderAsc((prev) => !prev);
    const newOrder = {};
    Object.defineProperty(newOrder, field, {
      value: orderAsc ? "asc" : "desc",
    });
    console.log("newOrder", newOrder);
    getSortedPolicies({ variables: { orderBy: newOrder } });
  };

  return (
    <div className='py-10'>
      <table className='w-full '>
        <thead className='bg-gray-100 border-b-2 border-gray-200'>
          <tr>
            {headers?.map((header: string) => (
              <th
                key={header}
                className='w-20 capitalize p-3  text-md font-semibold tracking-wide items-center justify-center'>
                <div className='flex flex-row justify-between'>
                  <p>{formatString(header)}</p>
                  <img
                    onClick={() => handleSort(header)}
                    src={orderAsc ? arrowUp : arrowDown}
                    height={24}
                    width={24}
                    alt='sort-icon'
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100'>
          {result.data
            ? result.data.sortedPolicies?.map((policy: any) => (
                <TableRow key={policy.policyNumber} {...policy} />
              ))
            : policies?.allPolicies?.map((policy) => (
                <TableRow key={policy.policyNumber} {...policy} />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
