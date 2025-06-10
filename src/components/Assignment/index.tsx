import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type AssignmentProps = {
  title: string;
}

export function Assignment({ title }: AssignmentProps) {

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{title}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
