const TaskList = ({ tasks, onToggleTask, onRemoveTask }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              id={`task-${task.id}`}
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            <label 
              htmlFor={`task-${task.id}`}
              className={task.completed ? 'task-label completed' : 'task-label'}
            >
              {task.label}
            </label>
            <button 
              className="remove-btn"
              onClick={() => onRemoveTask(task.id)}
              aria-label={`Remove task: ${task.label}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="task-summary">
        {`You have ${total} tasks, ${completed} completed.`}
      </p>
    </div>
  );
};

export default TaskList;

