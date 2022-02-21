import { useState } from "react";
import { AllPolicy } from "../../interfaces/allPolicies.interface";

import { useMutation } from "@apollo/client";
import { EDIT_POLICY } from "../../graphql/mutations";
import { ALL_POLICIES } from "../../graphql/querys";
import TableField from "./TableField";
import { EditState, FieldValue } from "../../interfaces/table.interface";

const TableRow = (policy: AllPolicy) => {
  const [edit, setEdit] = useState<EditState>({
    provider: false,
    status: false,
    endDate: false,
  });
  const [fieldValue, setFieldValue] = useState<FieldValue>({
    provider: policy.provider,
    status: policy.status,
    endDate: policy.endDate,
  });

  const [editPolicy] = useMutation(EDIT_POLICY, {
    refetchQueries: [{ query: ALL_POLICIES }],
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
      <TableField
        editBoolean={edit.provider}
        editState={edit}
        thisFieldValue={fieldValue.provider}
        setEdit={setEdit}
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
        policyNumber={policy.policyNumber}
        handleSave={handleSave}
        thisField='provider'
      />
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
        <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-white bg-featherPurple rounded-lg bg-opacity-50'>
          {policy.insuranceType}
        </span>
      </td>
      <TableField
        editBoolean={edit.status}
        editState={edit}
        thisFieldValue={fieldValue.status}
        setEdit={setEdit}
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
        policyNumber={policy.policyNumber}
        handleSave={handleSave}
        thisField='status'
      />
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
