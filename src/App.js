import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Nav.js'
import {todos} from './todos.json'
import TodoForm from './Components/TodoForm.js';



class App extends Component {
  constructor(){
    super();////herede toa la funcionalidad de react siempre debe ir en el constructor
    
    this.state = {
        todos:todos
    };
      this.handleAddTodo = this.handleAddTodo.bind(this);
      this.RemoveTodo = this.RemoveTodo.bind(this);

  }
  handleAddTodo(todo){
    this.setState({
      ///de esta forma estoy concatenando informacon a la lista que objetos qye ya tenia definida
      todos: [...this.state.todos,todo]
    })
  }

  RemoveTodo(index){
    if (window.confirm("Deseas eliminar la tarjeta")) {
      this.setState({
        ///retorna una lista nueva pero con el filter estoy diciendo que cumpla cierta
        //condicion en este caso de que no venga con el indice que le digo
        
        todos:this.state.todos.filter((e,i)=>{
          return (
            i !== index
          )
        })
      })
    }
  }
  render() {
    var  lista_tareas=this.state.todos.map((todo,i)=> {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
            <div className="card-footer" onClick={this.RemoveTodo.bind(this,i)}>
              <button>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <Navigation titulo={lista_tareas.length}/>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {lista_tareas}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
