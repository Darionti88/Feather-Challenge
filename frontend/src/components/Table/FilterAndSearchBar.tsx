import { useGetEnums } from "../../hooks/useGetEnums";
import { PolicyStatus } from "../../interfaces/enums.interface";
import { Button, Input } from "@popsure/dirty-swan";
import { Dispatch, SetStateAction } from "react";

interface Props {
  filter: PolicyStatus | string;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  handleFilter: (filterOption: string) => void;
  handleSearch: (searchValue: string) => void;
}

const FilterAndSearchBar = ({
  filter,
  handleFilter,
  handleSearch,
  search,
  setSearch,
}: Props) => {
  const statusEnums = useGetEnums();

  return (
    <section className='bg-gray-100 border-b-4 w-full flex space-x-5 border-gray-400 items-center h-20'>
      <div className='flex space-x-5'>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button buttonTitle='Search' onClick={() => handleSearch(search)} />
      </div>
      <div className='flex space-x-5'>
        <select
          className='p-select'
          name='status'
          value={filter}
          onChange={(e) => handleFilter(e.target.value)}>
          {statusEnums?.map((status: any) => (
            <option key={status.name} value={status.name}>
              {status.name}
            </option>
          ))}
        </select>
        <Button buttonTitle='Clear Filter' />
      </div>
    </section>
  );
};

export default FilterAndSearchBar;
