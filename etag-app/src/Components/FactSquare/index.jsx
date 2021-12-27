import React, { useState, useMemo } from 'react';

function factorialOf(n) {
	console.log("factorialOf(n) called!");
	// for (let i = 0; i < 3000000000; i++);
  	return n <= 0 ? 1 : n * factorialOf(n - 1);
}

function SquareOf(n) {
	console.log("SquareOf(n) called!");
	// for (let i = 0; i < 4000000000; i++);
	  return Math.pow(n, 2);
}

function FactSquare(props) {
	const [factNumber, setFactNumber] = useState(0);
	const [squareNumber, setSquareNumber] = useState(0);
	console.count('FactSquare class');

	// const factorialOfVal = factorialOf(factNumber);
	const factorialOfVal = useMemo(() => factorialOf(factNumber), [factNumber]);

	// const SquareOfVal = SquareOf(squareNumber);
	const SquareOfVal = useMemo(() => SquareOf(squareNumber), [squareNumber]);
	// if [dependencies] have changed on RENDERING, then i will call the function or i will return the previous value.

	const onChangeHandler = (e) => {
		setFactNumber(e.target.value);
	};

	const onChangeSquareHandler = (e) => {
		setSquareNumber(e.target.value);
	};
	return (
		<div className='App'>
			<h3>Factorial Num</h3>
			<input type='number' placeholder='Enter a number' value={factNumber} onChange={onChangeHandler} />
			<div>Factorial: {factorialOfVal}</div>



			<h3>Square Num</h3>
			<input type='number' placeholder='Enter a number' value={squareNumber} onChange={onChangeSquareHandler} />
			<div>SquareOf: {SquareOfVal}</div>

		</div>
	);
}

export default React.memo(FactSquare);

// if any props have been changed, then i will render my component Or i wont render the component
