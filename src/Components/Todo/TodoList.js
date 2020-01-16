// your Components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Task from "./Todo";

const TodoList = props => {

	return (
		<>
			<section id='todo-list' className='todo-list'>
				<Task
					// key={item.id}
					// item={item}
					// togglePurchased={props.togglePurchased}
				/>
			</section>
			<footer id='todo-footer' className='todo-footer'>
				<button>
					Clear Completed
				</button>
			</footer>
		</>
	);

};

export default TodoList;