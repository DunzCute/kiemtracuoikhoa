import React from 'react';

function Task({ task, completeTask, deleteTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <input type="checkbox" checked={task.completed} onChange={() => completeTask(task.id)} />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Xóa</button>
    </li>
  );
};

export default Task;
