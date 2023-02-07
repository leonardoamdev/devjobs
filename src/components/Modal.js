import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/60">
      <div className="relative my-6 container">{children}</div>
    </div>
  );
};

export default Modal;
