import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();
  console.log(isModalOpen);
  return (
    <div className={`${isModalOpen ? "modal-over show-modal" : "modal-over "}`}>
      <div className="modal-container">
        <h3>Hero Modal</h3>
        <button className="btn modal-close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
