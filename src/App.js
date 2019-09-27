import React from 'react';
import { Field } from './field';
import './App.css';

function App() {
  const field = new Array(7).fill(new Array(6).fill(null));
  return <div>
    <Field field={field} />
  </div>;
};
export default App;
