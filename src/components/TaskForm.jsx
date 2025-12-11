import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    
    if (!value.length) {
      return;
    }

    onAddTask(value);
    setInputValue('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-input">Add a study task:</label>
      <div className="task-form-row">
        <input
          id="task-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g., Read Chapter 3"
        />
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;

