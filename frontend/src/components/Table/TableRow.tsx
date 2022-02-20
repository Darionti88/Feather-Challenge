import React, { useState } from "react";
import { AllPolicy } from "../../interfaces/allPolicies.interface";
import editSvg from "../../assets/icons/edit.svg";
import saveSvg from "../../assets/icons/save.svg";
import closeSvg from "../../assets/icons/close.svg";
import { Input } from "@popsure/dirty-swan";
import { useMutation } from "@apollo/client";
import { EDIT_POLICY } from "../../graphql/mutations";
import { ALL_POLICIES, SORTED_POLICIES } from "../../graphql/querys";

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
  const [newValue, setNewValue] = useState({
    provider: "",
    insuranceType: "",
    status: "",
  });

  const [editPolicy] = useMutation(EDIT_POLICY, {
    refetchQueries: [
      { query: SORTED_POLICIES, variables: { orderBy: { provider: "asc" } } },
    ],
  });

  const handleSave = (
    field: string,
    fieldValue: string,
    policyNumber: string
  ) => {
    setEdit({ ...edit, [field]: false });
    const newFieldAndValue = { [field]: fieldValue };
    editPolicy({ variables: { policyNumber, edit: newFieldAndValue } });
  };

  return (
    <tr className='bg-gray-50'>
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        <a href='#' className='font-bold text-blue-500 hover:underline'>
          {`${policy.customer.firstName} ${policy.customer.lastName}`}
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
            <Input
              className='border-text border-2 border-opacity-20 rounded-md'
              value={newValue.provider}
              onChange={(e) =>
                setNewValue({ ...newValue, provider: e.target.value })
              }
            />
            <div className='flex flex-row space-x-3'>
              <img
                src={saveSvg}
                height={17}
                width={17}
                alt='edit-icon'
                onClick={() =>
                  handleSave("provider", newValue.provider, policy.policyNumber)
                }
              />
              <img
                src={closeSvg}
                height={17}
                width={17}
                alt='edit-icon'
                onClick={() => setEdit({ ...edit, provider: false })}
              />
            </div>
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
