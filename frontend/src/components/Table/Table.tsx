import React, { useState } from "react";
import TableRow from "./TableRow";
import arrowUp from "../../assets/icons/arrowUp.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";
import { formatString } from "../../helpers/formatString";
import { useLazyQuery, useQuery } from "@apollo/client";
import { ALL_POLICIES, SORTED_POLICIES } from "../../graphql/querys";
import { useGetAllPolicies } from "../../hooks/useGetPolicies";
import { Policies } from "../../interfaces/allPolicies.interface";
import { getHeadersArray } from "../../helpers/headersArray";

const Table = () => {
  const { policies, refetch } = useGetAllPolicies();
  const [getSortedPolicies, result] = useLazyQuery(SORTED_POLICIES);
  const [orderAsc, setOrderAsc] = useState<boolean>();

  const headers: string[] = getHeadersArray(policies);

  const handleSort = (field: string) => {
    setOrderAsc((prev) => !prev);
    const newOrder = { [field]: orderAsc ? "asc" : "desc" };
    getSortedPolicies({
      variables: {
        orderBy: newOrder,
      },
    });
  };

  return (
    <div className='py-10'>
      <table className='w-full shadow-lg'>
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
