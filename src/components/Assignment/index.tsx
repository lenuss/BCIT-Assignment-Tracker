import TAssignment from "../../types/assignment";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useState } from "react";

type AssignmentProps = TAssignment & {
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
  onDateSelect: (date: Date, id: string) => void;
}

export function Assignment(props: AssignmentProps) {
  const [dayPickerToggled, setDayPickerToggled] = useState(false);
  
  function handleDelete() {
    props.onDelete(props.id)
  }

  function handleCheck() {
    props.onCheck(props.id)
  }

  function handleDateSelect(date: Date) {
    props.onDateSelect(date, props.id);
    setDayPickerToggled(false);
  }

  function calculateDaysLeft(date: Date | null): number | null {
    return date ? Math.ceil((date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : null
  }

  function getDueDateTagInfo(date: Date | null): { text: string; class: string } {
    const daysNo = calculateDaysLeft(date);
    if (daysNo === null) {
      return { text: "No due date", class: '' };
    }
    return daysNo > 1
      ? { text: daysNo + ' days left', class: '' }
      : daysNo === 1
        ? { text: 'Tomorrow', class: styles.tagRed }
        : { text: 'DUE', class: styles.tagRed }
  }

  return (
    <div className={`${styles.assignment} ${props.completed ? styles.completed : ""}`}>
      <div className={styles.topRow}>
        <button className={styles.checkContainer} onClick={handleCheck}>
          {props.completed
            ? (<BsCheckCircleFill />)
            : (<div />)
          }
        </button>

        <p>{props.title}</p>

        { !props.completed && (
          <div 
            className={`${styles.dueDateTag} ${getDueDateTagInfo(props.dueDate).class}`}
            onClick={() => setDayPickerToggled(!dayPickerToggled)}
          > 
            {`Due: ${getDueDateTagInfo(props.dueDate).text}`}
          </div>
        )}
        

        <button onClick={handleDelete} className={styles.deleteButton}>
          <TbTrash size={20} />
        </button>
      </div>

      <div className={styles.bottomRow}>
        <div className={`${styles.datePickerContainer} ${dayPickerToggled ? styles.active : ""}`}>
          {dayPickerToggled && (
            <DayPicker
              animate
              mode="single"
              selected={props.dueDate || new Date()}
              required={true}
              hidden={{before: new Date()}}
              onSelect={handleDateSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
}
