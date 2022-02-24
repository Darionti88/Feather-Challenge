import React from "react";
import { setStatusColor } from "../../helpers/statusColor";

interface Props {
  status: string | undefined;
  position?: string;
}

const Chip = ({ status, position }: Props) => {
  return (
    <span
      data-testid='chip'
      className={`p-1.5 font-medium text-1xl uppercase 
    tracking-wider text-white ${setStatusColor(status)} rounded-lg 
     ${position ? position : null}`}>
      {status}
    </span>
  );
};

export default Chip;
