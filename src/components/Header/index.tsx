import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

export function Header() {
  const [newAssignment, setNewAssignment] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewAssignment(event.target.value);
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form onSubmit={handleSubmit} className={styles.newAssignmentForm}>
        <input
          value={newAssignment}
          onChange={handleChange}
          placeholder="Add a new assignment"
          type="text"
        />
        <button
          disabled={newAssignment === ""}
          type="submit"
          className=""
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
