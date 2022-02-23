import React from "react";
import arrowUp from "../../assets/icons/arrowUp.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";
import { formatString } from "../../helpers/formatHelpers";

interface HeaderProps {
  header: string;
  orderAsc: any;
  handleSort: (header: string) => void;
}

const TableHeader = ({ header, orderAsc, handleSort }: HeaderProps) => {
  return (
    <th
      key={header}
      className='w-20 capitalize p-3  text-md font-semibold tracking-wide items-center justify-center'>
      <div className='flex flex-row justify-between'>
        <p>{formatString(header)}</p>
        <img
          onClick={() => handleSort(header)}
          src={orderAsc[header] ? arrowUp : arrowDown}
          height={24}
          width={24}
          alt='sort-icon'
        />
      </div>
    </th>
  );
};

export default TableHeader;
