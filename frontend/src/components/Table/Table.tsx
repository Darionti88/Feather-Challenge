import React, { useState } from "react";
import TableRow from "./TableRow";
import { Policies } from "../../interfaces/allPolicies.interface";
import { formatString } from "../../helpers/formatString";
import { Input } from "@popsure/dirty-swan";
import { useQuery } from "@apollo/client";
import { ALL_POLICIES } from "../../graphql/querys";

const Table = () => {
  const { data, error, loading } = useQuery(ALL_POLICIES);
  const [searchInput, setSearchInput] = useState("");
  const policies: Policies = data;

  const headers: string[] = policies?.allPolicies.reduce(
    (acc: string[], curr) => {
      if (policies.allPolicies.indexOf(curr) === 0) {
        return Object.keys(curr);
      }
      return acc.slice(1);
    },
    []
  );
  return (
    <div className='py-10 w-full'>
      <div className='w-full bg-gray-100 pl-2 py-1 '>
        <Input
          className='wmx5 mt8  w-full'
          placeholder='Search'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <table className='w-full '>
        <thead className='bg-gray-100 border-b-2  border-gray-200'>
          <tr>
            {headers?.map((header: string) => (
              <th className='w-20 capitalize p-3 text-sm font-semibold tracking-wide text-left'>
                {formatString(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100'>
          {policies?.allPolicies.map((policy) => (
            <TableRow {...policy} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
