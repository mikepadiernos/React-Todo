// Import React Components
import React from 'react';

// Import Data source
import Data from "./Data/Data";

// Import App Components
import TodoForm from "./Components/Todo/TodoForm";
import TodoList from "./Components/Todo/TodoList";

// App component render
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todoList: Data,
      z: ""
    };
  }

  addNewTask = newItemTask => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { task: newItemTask, completed: false, id: Math.floor((Math.random() * 1500000000000) + 1) }
      ]
    };
    this.setState(newState);
  };

  toggleCompleted = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(item => {
        return !item.completed;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className='app app-container'>
        <header id='app-header' className='app-header'>
          <h1>My Todo's</h1>
        </header>
        <main id='app-content' className='app-content'>
          <TodoForm
            addNewTask={this.addNewTask}
          />
          <TodoList
            todolist={this.state.todoList}
            toggleCompleted={this.toggleCompleted}
            clearCompleted={this.clearCompleted}
          />
        </main>
      </div>
    );
  }
}

export default App;
