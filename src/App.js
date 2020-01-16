import React from 'react';
import Data from "./Data/Data";

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

        </main>
      </main>
    );
  }
}

export default App;
