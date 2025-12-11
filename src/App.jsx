import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import RandomTask from './components/RandomTask';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, label: 'Review SI 579 notes', completed: false },
    { id: 2, label: 'Finish reading for lecture', completed: false }
  ]);

  const handleAddTask = (label) => {
    const newTask = { id: Date.now(), label, completed: false };
    setTasks(prev => [...prev, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleRemoveTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <main className="app-container" aria-label="Study Helper task planner">
      <header>
        <h1>Study Helper – React</h1>
        <p className="subtitle">David Vargas – davidva</p>
      </header>

      <p className="description">
        Add your study tasks, mark them complete, and get random suggestions for what to study next!
      </p>

      <TaskForm onAddTask={handleAddTask} />
      
      <TaskList 
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onRemoveTask={handleRemoveTask}
      />
      
      <RandomTask tasks={tasks} />
    </main>
  );
};

export default App;

