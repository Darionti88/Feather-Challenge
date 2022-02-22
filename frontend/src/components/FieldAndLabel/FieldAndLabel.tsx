import React from "react";

interface FieldProps {
  label: string;
  content: string;
}

const FieldAndLabel = ({ label, content }: FieldProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <label
        className=' capitalize text-1xl self-center text-gray-400'
        htmlFor={label}>
        {label}
      </label>
      <p className=' capitalize text-2xl text-text' id={label}>
        {content}
      </p>
    </div>
  );
};

export default FieldAndLabel;
