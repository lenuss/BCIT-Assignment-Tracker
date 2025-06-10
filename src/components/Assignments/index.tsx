import TAssignment from "../../types/assignment";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type assignmentsProps = {
  assignments: Array<TAssignment>;
  onDelete: (id: string) => void;
}

export function Assignments({assignments, onDelete}: assignmentsProps) {
  function getNoOfCompletedAssignments() {
    return assignments ? assignments.filter(assignment => assignment.completed).length : 0;
  }

  return (  
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments?.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{getNoOfCompletedAssignments()} of {assignments?.length}</span>
        </div>
      </header>

      {assignments && assignments.length > 0
          ? assignments.map((assignment) => (
            <div key={assignment.id} className={styles.list}>
              <Assignment onDelete={onDelete} {...assignment}/>
            </div>
          ))
          : (<div className={styles.noAssignments}>
              <p>No assignments to show. Add one above!</p>
            </div>)
      }
      
    </section>
  );
}
