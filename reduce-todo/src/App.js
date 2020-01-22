import React, { useReducer } from 'react';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import { todoState, todoReducer } from './reducers/reducer';

import './App.css';




function App() {
  const [state, dispatch] = useReducer(todoReducer, todoState);
  return (
    <div className="App">
      <h1>ToDo App, using reducer!</h1>
      <TodoForm state={state} dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
     
    </div>
  );
}

export default App;
