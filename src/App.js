import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Nav.js'
import {todos} from './todos.json'


class App extends Component {
  constructor(){
    super();////herede toa la funcionalidad de react siempre debe ir en el constructor
    
    this.state = {
        todos:todos
    };
  }
  render() {
    var  lista_tareas=this.state.todos.map((todo,i)=> {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <Navigation titulo={lista_tareas.length}/>

        <div className="container">
          <div className="row">
            {lista_tareas}
          </div>
        </div>
       
        <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default App;
