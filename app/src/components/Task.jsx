import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/taskSlice';

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleSave = () => {
    dispatch(editTask({ id: task.id, newDesc }));
    setIsEditing(false);
  };

  return (
    <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input value={newDesc} onChange={e => setNewDesc(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={() => dispatch(toggleTask(task.id))}>
            {task.isDone ? 'Undo' : 'Done'}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Task;
