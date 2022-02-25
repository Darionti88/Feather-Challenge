import editSvg from "../../assets/icons/edit.svg";
import saveSvg from "../../assets/icons/save.svg";
import closeSvg from "../../assets/icons/close.svg";
import { TableFieldProps } from "../../interfaces/table.interface";
import DatePicker from "react-date-picker";
import { formatDate } from "../../helpers/formatHelpers";

const DateField = ({
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
    <td className='p-3 w-15 text-md text-gray-700 flex flex-row justify-between whitespace-nowrap'>
      {!editBoolean ? (
        <>
          <p>{formatDate(thisFieldValue)}</p>

          <img
            src={editSvg}
            height={17}
            width={17}
            className='cursor-pointer'
            alt='edit-icon'
            onClick={() => setEdit({ ...editState, [thisField]: true })}
          />
        </>
      ) : (
        <>
          <DatePicker
            format='y-MM-dd'
            minDate={new Date()}
            value={new Date(thisFieldValue)}
            onChange={(value: Date) =>
              setFieldValue({ ...fieldValue, [thisField]: value })
            }
          />
          <div className='flex flex-row space-x-3'>
            <img
              src={saveSvg}
              height={17}
              width={17}
              className='cursor-pointer'
              alt='save-icon'
              onClick={() =>
                handleSave(thisField, thisFieldValue, policyNumber)
              }
            />
            <img
              src={closeSvg}
              height={17}
              width={17}
              className='cursor-pointer'
              alt='close-icon'
              onClick={() => setEdit({ ...editState, [thisField]: false })}
            />
          </div>
        </>
      )}
    </td>
  );
};

export default DateField;
