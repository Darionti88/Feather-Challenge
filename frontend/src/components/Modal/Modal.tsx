import { RegularModal } from "@popsure/dirty-swan";
import { ApolloError } from "@apollo/client";
import { useState } from "react";

interface ModalProps {
  error: ApolloError;
}

const Modal = ({ error }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(Boolean(error));

  return (
    <RegularModal
      title='Something went Wrong.'
      isOpen={isOpen}
      className=' text-2xl text-featherDarkPurple'
      onClose={() => {
        setIsOpen(false);
      }}>
      <div style={{ padding: "0 16px 16px 16px" }} className='text-2xl'>
        <p className='p-p' style={{ fontSize: 20, padding: 5 }}>
          {error.message}
        </p>
        <button
          className='p-btn--primary mt24 wmn3'
          onClick={() => setIsOpen(false)}>
          Ok
        </button>
      </div>
    </RegularModal>
  );
};

export default Modal;
