import { useGetEnums } from "../../hooks/useGetEnums";
import { Dispatch, SetStateAction } from "react";
import { FieldValue } from "../../interfaces/table.interface";

interface Props {
  setFieldValue: Dispatch<SetStateAction<FieldValue>>;
  fieldValue: FieldValue;
  thisField: string;
  thisFieldValue: string;
}

const Select = ({
  setFieldValue,
  fieldValue,
  thisField,
  thisFieldValue,
}: Props) => {
  const statusEnums = useGetEnums();

  return (
    <select
      className='p-select'
      name={thisField}
      value={thisFieldValue}
      onChange={(e) =>
        setFieldValue({ ...fieldValue, [thisField]: e.target.value })
      }>
      {statusEnums?.map((status: any) => (
        <option key={status.name} value={status.name}>
          {status.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
