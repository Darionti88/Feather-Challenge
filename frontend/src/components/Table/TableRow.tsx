import React, { useState } from "react";
import { AllPolicy } from "../../interfaces/allPolicies.interface";
import editSvg from "../../assets/icons/edit.svg";
import saveSvg from "../../assets/icons/save.svg";
import { Input } from "@popsure/dirty-swan";

const TableRow = (policy: AllPolicy) => {
  const [edit, setEdit] = useState({
    provider: false,
    insuranceType: false,
    status: false,
    policyNumber: false,
    startDate: false,
    endDate: false,
    createdAt: false,
  });

  const handleSave = (field: string) => {
    setEdit({ ...edit, [field]: false });
  };

  return (
    <tr className='bg-gray-50'>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        <a href='#' className='font-bold text-blue-500 hover:underline'>
          {`${policy?.customer?.firstName} ${policy?.customer?.lastName}`}
        </a>
      </td>
      <td className='p-3 text-sm text-gray-700 flex flex-row justify-between whitespace-nowrap'>
        {!edit.provider ? (
          <>
            <p>{policy.provider}</p>
            <img
              src={editSvg}
              height={17}
              width={17}
              alt='edit-icon'
              onClick={() => setEdit({ ...edit, provider: true })}
            />
          </>
        ) : (
          <>
            <Input className='border-text border-2 border-opacity-20 rounded-md' />
            <img
              src={saveSvg}
              height={17}
              width={17}
              alt='edit-icon'
              onClick={() => handleSave("provider")}
            />
          </>
        )}
      </td>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-white bg-featherPurple rounded-lg bg-opacity-50'>
          {policy.insuranceType}
        </span>
      </td>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        {
          <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-text bg-featherGreen rounded-lg bg-opacity-50'>
            {policy.status}
          </span>
        }
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
