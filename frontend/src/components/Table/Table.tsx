import React from "react";
import TableRow from "./TableRow";
import { Policies } from "../../interfaces/allPolicies.interface";
import { formatString } from "../../helpers/formatString";

interface Props {
  headers: string[];
  data: Policies;
}

const Table = ({ headers, data }: Props) => {
  return (
    <div className='py-10'>
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
          {data?.allPolicies.map((policy) => (
            <TableRow {...policy} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
