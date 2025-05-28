import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/taskSlice';
import Task from './Task';

function ListTask() {
  const { list, filter } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const filteredList = list.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('done'))}>Done</button>
        <button onClick={() => dispatch(setFilter('notDone'))}>Not Done</button>
      </div>
      {filteredList.map(task => <Task key={task.id} task={task} />)}
    </div>
  );
}

export default ListTask;
