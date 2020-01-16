// your Components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Task from "./Todo";

const TodoList = props => {

	return (
		<>
			<section id='todo-list-section' className='todo-list-section'>
				<ul id='todo-list' className='todo-list'>
				{props.todolist.map(item => (
					<Task
						key={item.id}
						item={item}
						// togglePurchased={props.togglePurchased}
					/>
				))}
				</ul>
			</section>
			<section id='todo-bottom-section' className='todo-bottom-section'>
				<button className='button button-clear'>
					Clear Completed
				</button>
			</section>
		</>
	);

};

export default TodoList;