import React from "react";
import { AllPolicy } from "../../interfaces/allPolicies.interface";

const TableRow = (policy: AllPolicy) => {
  return (
    <tr className='bg-gray-50'>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        <a href='#' className='font-bold text-blue-500 hover:underline'>
          {`${policy.customer.firstName} ${policy.customer.lastName}`}
        </a>
      </td>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        {policy.provider}
      </td>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-white bg-featherPurple rounded-lg bg-opacity-50'>
          {policy.insuranceType}
        </span>
      </td>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-text bg-featherGreen rounded-lg bg-opacity-50'>
          {policy.status}
        </span>
      </td>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        {policy.policyNumber}
      </td>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        {policy.startDate}
      </td>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        {policy.endDate}
      </td>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        {policy.createdAt}
      </td>
    </tr>
  );
};

export default TableRow;
