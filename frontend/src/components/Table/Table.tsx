import { useState } from "react";
import TableRow from "./TableRow";

import { useGetAllPolicies } from "../../hooks/useGetPolicies";
import { getHeadersArray } from "../../helpers/headersArray";
import TableHeader from "./TableHeader";

const Table = () => {
  const { policies, refetch, loading, error } = useGetAllPolicies();
  const [orderAsc, setOrderAsc] = useState<{ [key: string]: boolean }>({
    customer: false,
    provider: false,
    insuranceType: false,
    status: false,
    policyNumber: false,
    startDate: false,
    endDate: false,
    createdAt: false,
  });

  const headers: string[] = getHeadersArray(policies);

  const handleSort = (field: string) => {
    setOrderAsc({ ...orderAsc, [field]: !orderAsc[field] });
    const customerOrder = {
      customer: { lastName: orderAsc[field] ? "desc" : "asc" },
    };
    const newOrder = { [field]: orderAsc[field] ? "desc" : "asc" };
    refetch({ orderBy: field === "customer" ? customerOrder : newOrder });
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className='py-10'>
      <table className='w-full shadow-lg'>
        <thead className='bg-gray-100 border-b-2 border-gray-200'>
          <tr>
            {headers?.map((header: string) => (
              <TableHeader
                orderAsc={orderAsc}
                header={header}
                handleSort={handleSort}
              />
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
