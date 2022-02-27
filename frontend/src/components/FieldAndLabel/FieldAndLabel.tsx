interface FieldProps {
  label: string;
  content: string | number;
}

const FieldAndLabel = ({ label, content }: FieldProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className=' capitalize text-1xl self-center text-gray-400'>{label}</p>
      <p
        aria-label={label}
        className='capitalize text-2xl text-text'
        id={label}>
        {content}
      </p>
    </div>
  );
};

export default FieldAndLabel;
