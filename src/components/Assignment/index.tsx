import TAssignment from "../../types/assignment";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type AssignmentProps = TAssignment & {
  onDelete: (id: string) => void;
}

export function Assignment(props: AssignmentProps) {
  function handleDelete() {
    props.onDelete(props.id)
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{props.title}</p>

      <button onClick={handleDelete} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
