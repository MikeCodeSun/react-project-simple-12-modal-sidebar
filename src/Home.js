import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Home() {
  const { openNavbar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="btn btn-sidebar" onClick={openNavbar}>
        <FaAlignJustify />
      </button>
      <button className="btn btn-modal" onClick={openModal}>
        modal
      </button>
    </main>
  );
}
