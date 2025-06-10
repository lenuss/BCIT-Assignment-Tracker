import TAssignment from "../../types/assignment";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

type AssignmentProps = TAssignment & {
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
}

export function Assignment(props: AssignmentProps) {
  function handleDelete() {
    props.onDelete(props.id)
  }

  function handleCheck() {
    props.onCheck(props.id)
  }

  return (
    <div className={`${styles.assignment} ${props.completed ? styles.completed : ""}`}>
      <button className={styles.checkContainer} onClick={handleCheck}>
        {props.completed
          ? (<BsCheckCircleFill />)
          : (<div />)
        }
      </button>

      <p>{props.title}</p>

      <button onClick={handleDelete} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
