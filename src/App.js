import './App.css';
import React, {Fragment,useState}  from 'react'
import Todo from './components/Todo'
import Header from './components/Header'
import FormAdd from './components/Form';

function App() {
  return (
    <Fragment>
    <div className="App">
      <Header />
      <Todo />
    </div>
    </Fragment>
  );
}

export default App;
