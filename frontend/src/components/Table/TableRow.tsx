import { useState } from "react";
import { AllPolicy } from "../../interfaces/allPolicies.interface";
import { useMutation } from "@apollo/client";
import { EDIT_POLICY } from "../../graphql/mutations";
import TableField from "./TableField";
import { EditState, FieldValue } from "../../interfaces/table.interface";
import DateField from "./DateField";
import { Link } from "react-router-dom";

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

  const [editPolicy] = useMutation(EDIT_POLICY);

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
      <td className='p-3 text-sm text-gray-700 w-10 '>
        <Link
          to={`/customer/${policy.policyNumber}`}
          className='font-bold text-blue-500 hover:underline text-1xl'>
          {`${policy.customer.firstName} ${policy.customer.lastName}`}
        </Link>
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
      <td className='p-3 text-sm text-gray-700 whitespace-nowrap w-15'>
        <span className='p-2 text-md font-medium uppercase tracking-wider text-white bg-featherBlue rounded-lg bg-opacity-60'>
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
      <td className='p-3 text-md text-gray-700 whitespace-nowrap w-15'>
        <Link
          to={`/policy/${policy.policyNumber}`}
          className=' text-blue-500 hover:underline text-1xl'>
          {`# ${policy.policyNumber}`}
        </Link>
      </td>
      <td className='p-3 text-md text-gray-700 whitespace-nowrap w-15'>
        {policy.startDate}
      </td>
      <DateField
        editBoolean={edit.endDate}
        editState={edit}
        thisFieldValue={fieldValue.endDate}
        setEdit={setEdit}
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
        policyNumber={policy.policyNumber}
        handleSave={handleSave}
        thisField='endDate'
      />
      <td className='p-3 text-md text-gray-700 whitespace-nowrap w-15'>
        {policy.createdAt}
      </td>
    </tr>
  );
};

export default TableRow;
