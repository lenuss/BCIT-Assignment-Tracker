import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import TAssignment from "./types/assignment";
import { useState } from "react";

function App() {
  const [assignments, setAssignments] = useState([] as Array<TAssignment>)

  function handleAddAssignment(title: string) {
    setAssignments([
      ...assignments,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false
      }
    ])
  }

  function handleDeleteAssignment(id: string) {
    setAssignments(assignments.filter(assignment => assignment.id !== id))
  }

  return (
    <>
      <Header
        onAddAssignment={handleAddAssignment}
      />
      <Assignments assignments={assignments} onDelete={handleDeleteAssignment}/>
    </>
  );
}

export default App;
