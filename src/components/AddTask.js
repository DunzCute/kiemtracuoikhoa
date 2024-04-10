import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      addTask({
        id: Math.random().toString(36).substring(7),
        text,
        completed: false,
      });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default AddTask;
