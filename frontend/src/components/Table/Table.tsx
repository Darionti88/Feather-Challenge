import { useState } from "react";
import TableRow from "./TableRow";
import arrowUp from "../../assets/icons/arrowUp.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";
import { formatString } from "../../helpers/formatHelpers";
import { useGetAllPolicies } from "../../hooks/useGetPolicies";
import { getHeadersArray } from "../../helpers/headersArray";

const Table = () => {
  const { policies, refetch, loading, error } = useGetAllPolicies();
  const [orderAsc, setOrderAsc] = useState<boolean>();

  const headers: string[] = getHeadersArray(policies);

  const handleSort = (field: string) => {
    setOrderAsc((prev) => !prev);
    const newOrder = { [field]: orderAsc ? "asc" : "desc" };
    refetch({ orderBy: newOrder });
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

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
          {policies?.allPolicies?.map((policy) => (
            <TableRow key={policy.policyNumber} {...policy} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
