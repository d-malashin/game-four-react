import React from 'react';
import Field from './field';
import './App.css';

  function App() {
  const field = [
    [1, 0, 0, 0, 0, 0],
    [2, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [2, 2, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 2, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0]
  ];
  return <div>
    <Field field={field} />
    </div>;
};
export default App;
