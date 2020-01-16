import React from "react";

class TodoForm extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			newTask: ""
		};
	}

	handleChanges = e => {
		this.setState({ ...this.state, newTask: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addNewTask(this.state.newTask);
		this.setState({...this.state, newTask: ""})
	};


	render() {
		return (
			<section id='todo-form' className='todo-form'>
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChanges}
						type="text"
						name="item"
						value={this.state.newTask}
					/>
					<button>
						Add Task
					</button>
				</form>
			</section>
		)
	}

}

export default TodoForm;