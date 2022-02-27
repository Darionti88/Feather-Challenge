import { useGetEnums } from "../../hooks/useGetEnums";
import { Button, Input } from "@popsure/dirty-swan";
import { Dispatch, SetStateAction } from "react";
import { EnumValue } from "../../interfaces/enums.interface";

interface Props {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  handleFilterAndSearch: (filterOption?: string) => void;
}

const FilterAndSearchBar = ({
  filter,
  setFilter,
  handleFilterAndSearch,
  search,
  setSearch,
}: Props) => {
  const statusEnums = useGetEnums();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilterAndSearch();
    }
  };

  const handleFilter = (filterOption: string) => {
    setFilter(filterOption);
    handleFilterAndSearch(filterOption);
  };

  return (
    <section className='bg-gray-100 border-b-4 w-full flex space-x-5 border-gray-400 items-center h-20'>
      <div className='flex space-x-5'>
        <Input
          onKeyDown={(e) => handleKeyPress(e)}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button buttonTitle='Search' onClick={() => handleFilterAndSearch()} />
      </div>
      <div className='flex space-x-5'>
        <select
          className='p-select'
          name='status'
          value={filter}
          onChange={(e) => handleFilter(e.target.value)}>
          {statusEnums?.map((status: EnumValue) => (
            <option key={status.name} value={status.name}>
              {status.name}
            </option>
          ))}
        </select>
        <Button
          style={{ backgroundColor: "#e67b29" }}
          buttonTitle='Clear Filter'
          onClick={() => handleFilter("")}
        />
      </div>
    </section>
  );
};

export default FilterAndSearchBar;
