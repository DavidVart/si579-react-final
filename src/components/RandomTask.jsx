import { useState } from 'react';

const RandomTask = ({ tasks }) => {
  const [suggestion, setSuggestion] = useState('');

  const handleRandomize = () => {
    const incomplete = tasks.filter(t => !t.completed);
    
    if (!tasks.length) {
      setSuggestion('No tasks yet. Add something to study.');
    } else if (!incomplete.length) {
      setSuggestion('No remaining tasks! 🎉');
    } else {
      const random = incomplete[Math.floor(Math.random() * incomplete.length)];
      setSuggestion(`Next suggestion: ${random.label}`);
    }
  };

  return (
    <div className="random-task">
      <button onClick={handleRandomize}>
        What should I study next?
      </button>
      <section aria-live="polite" className="random-task-result">
        {suggestion}
      </section>
    </div>
  );
};

export default RandomTask;

