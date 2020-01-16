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

  render() {
    return (
      <main>
        <header>
          <h1>Todo App</h1>
        </header>
        <main>
          <TodoForm />
          <TodoList />
        </main>
      </main>
    );
  }
}

export default App;
