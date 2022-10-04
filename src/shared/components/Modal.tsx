import { ReactNode, useState } from "react";
import ReactDOM from "react-dom";
interface ModalProps {
  children?: ReactNode[];
  onClick?: () => void;
  state: boolean;
}

const modals = document.getElementById("modals");
const Modal = ({ onClick, children, state }: ModalProps) => {
  return (
    modals &&
    ReactDOM.createPortal(
      <div className={`modal-container ${state ? "" : "-hide"}`}>
        <div className="modal-backdrop" onClick={onClick}></div>
        <div className="modal-card">
          {children}
          <div className="modal-close-button" onClick={onClick}>
            <i className="bi bi-x"></i>
          </div>
        </div>
      </div>,
      modals
    )
  );
};

export default Modal;
