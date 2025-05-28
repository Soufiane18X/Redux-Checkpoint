import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

function AddTask() {
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (desc.trim()) {
      dispatch(addTask(desc));
      setDesc('');
    }
  };

  return (
    <div>
      <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Add a task" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTask;
