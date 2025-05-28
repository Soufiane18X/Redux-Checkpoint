import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>ToDo App with Redux</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
