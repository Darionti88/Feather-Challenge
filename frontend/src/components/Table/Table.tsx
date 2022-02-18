import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { AllPolicy, Policies } from "../../interfaces/allPolicies.interface";
import { formatString } from "../../helpers/formatString";
import { Button, Input } from "@popsure/dirty-swan";
import { RefetchQueriesFunction, useLazyQuery } from "@apollo/client";
import { FILTERED_POLICIES } from "../../graphql/querys";
import { FilteredPolicies } from "../../interfaces/filteredPolicies";

interface Props {
  headers: string[];
  data: FilteredPolicies;
  refetch: any;
}

const Table = ({ headers, data, refetch }: Props) => {
  const [searchInput, setSearchInput] = useState("");

  if (!data) return null;

  return (
    <div className='py-10 w-full'>
      <div className='w-full bg-gray-100 pl-2 py-1 flex shadow-md'>
        <Input
          className='wmx5 mt8  w-full'
          placeholder='Search'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          className='wmn3 mt8 ml-3'
          buttonTitle='Search'
          onClick={() => refetch({ filter: searchInput })}
        />
      </div>
      <table className='w-full shadow-md'>
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
          {data.filterPolicies.map((policy) => (
            <TableRow {...policy} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
