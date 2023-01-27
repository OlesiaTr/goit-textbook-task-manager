// Core
import { useDispatch } from 'react-redux';
import { deleteTask,toggleCompleted } from 'redux/actions';

// Utils
import { MdClose } from "react-icons/md";

// Styles
import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  // Call the action generator and pass the task ID
  // Send the result - task delete action
  const handleDelete = () => dispatch(deleteTask(task.id));

   // Call the action generator and pass the task ID
  // Send the result - action to switch task status
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
