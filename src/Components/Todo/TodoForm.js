import React from "react";

class TodoForm extends React.Component {

	render() {
		return (
			<section id='todo-form' className='todo-form'>
				<form>
					<input type="text" />
					<button>
						Add Task
					</button>
				</form>
			</section>
		)
	}

}

export default TodoForm;