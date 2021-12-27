import React, { useState, useMemo, useCallback } from 'react';
import FactSquare from '../FactSquare';
import Todos from '../Todo';


// const addTodoTemp =() => {
	// 	console.log('sdfgds');
	// }
	// const isBoolean = true;
// const obj = {
// 		label: 'label',
// 		value: 'value'
// }
// const title = 'title';
function Counter() {
	const [counter, setCounter] = useState(0);
	const [todos, settodos] = useState([])
	const counterHanderPlus = () => {
		console.log("counterHanderPlus called!");
		setCounter(counter + 1);
	};

	const counterHanderMinus = () => {
		setCounter(counter - 1);
	};

	// addtodo = return value of this function
	// addtodo = null
	const addTodo = useCallback(() => {
		settodos([...todos, "new Todo"]);
	}, [todos])

	return (
		<div className='App'>
			<h3>Counter</h3>
			<button onClick={() => counterHanderPlus()}>Counter ++</button>
			<button onClick={() => counterHanderMinus()}>Counter --</button>
			<div>Counter : {counter}</div>
			{/* <FactSquare /> */}
			<Todos todo={todos} addTodo={addTodo}/>
		</div>
	);
}

export default Counter;