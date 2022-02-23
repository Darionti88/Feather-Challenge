import React from "react";
import editSvg from "../../assets/icons/edit.svg";
import saveSvg from "../../assets/icons/save.svg";
import closeSvg from "../../assets/icons/close.svg";
import { Input } from "@popsure/dirty-swan";
import { TableFieldProps } from "../../interfaces/table.interface";
import Select from "../Select/Select";
import { setStatusColor } from "../../helpers/statusColor";

const TableField = ({
  editBoolean,
  editState,
  thisFieldValue,
  fieldValue,
  setFieldValue,
  setEdit,
  policyNumber,
  handleSave,
  thisField,
}: TableFieldProps) => {
  return (
    <td className='p-3 text-sm w-15 text-gray-700 flex flex-row justify-between whitespace-nowrap'>
      {!editBoolean ? (
        <>
          {thisField === "status" ? (
            <span
              className={`p-2 text-md font-medium uppercase tracking-wider 
               text-white shadow-sm ${setStatusColor(
                 thisFieldValue
               )} rounded-lg bg-opacity-50`}>
              {thisFieldValue}
            </span>
          ) : (
            <p className=' text-md'>{thisFieldValue}</p>
          )}
          <img
            src={editSvg}
            height={17}
            width={17}
            alt='edit-icon'
            onClick={() => setEdit({ ...editState, [thisField]: true })}
          />
        </>
      ) : (
        <>
          {thisField === "status" ? (
            <Select
              setFieldValue={setFieldValue}
              fieldValue={fieldValue}
              thisField={thisField}
              thisFieldValue={thisFieldValue}
            />
          ) : (
            <Input
              className='border-text border-2 border-opacity-20 rounded-md '
              value={thisFieldValue}
              onChange={(e) =>
                setFieldValue({ ...fieldValue, [thisField]: e.target.value })
              }
            />
          )}
          <div className='flex flex-row space-x-3'>
            <img
              src={saveSvg}
              height={17}
              width={17}
              alt='edit-icon'
              onClick={() =>
                handleSave(thisField, thisFieldValue, policyNumber)
              }
            />
            <img
              src={closeSvg}
              height={17}
              width={17}
              alt='edit-icon'
              onClick={() => setEdit({ ...editState, [thisField]: false })}
            />
          </div>
        </>
      )}
    </td>
  );
};

export default TableField;
