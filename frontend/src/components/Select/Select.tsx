import { useGetEnums } from "../../hooks/useGetEnums";
import { Dispatch, SetStateAction } from "react";
import { NewValue } from "../../interfaces/table.interface";

interface Props {
  setNewValue: Dispatch<SetStateAction<NewValue>>;
  newValue: NewValue;
  thisField: string;
}

const Select = ({ setNewValue, newValue, thisField }: Props) => {
  const statusEnums = useGetEnums();

  return (
    <select
      name={thisField}
      id={thisField}
      onChange={(e) =>
        setNewValue({ ...newValue, [thisField]: e.target.value })
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
