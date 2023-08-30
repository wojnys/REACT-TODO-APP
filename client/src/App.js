import React  from 'react';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

function App() {


  return (
    <div>
    <div className='container text-center'>
      <h1>Todo LIST</h1>
      <InputTodo />
      <ListTodo />
    </div>
    </div>
  );
}

export default App;
