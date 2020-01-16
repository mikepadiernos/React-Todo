import React from "react";

const Task = props => {
	return (
		<li
			// onClick={event => props.toggleCompleted(props.item.id)}
			// className={`item${props.item.completed ? " completed" : ""}`}
			className='todo-item'
		>
			<article>
				<p>{props.item.task}</p>
			</article>
		</li>
	);
};

export default Task;