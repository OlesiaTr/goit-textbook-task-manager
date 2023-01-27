// Core
import { useDispatch } from "react-redux";
import { addTask } from "redux/tasksSlice";

// Components
import { Button } from "components/Button/Button";

// Styles
import css from "./TaskForm.module.css";

export const TaskForm = () => {
  // Get a link to the action dispatch function
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // Call the action generator and pass the task text for the payload field
    //  Send the result - task creation action
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
