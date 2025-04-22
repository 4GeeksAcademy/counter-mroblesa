import React from "react";


//create your first component
function MyCounter (props){
	return (
	  <div className='mainCounter'>
		<div className='time'>c</div>
		<div className='six'>{props.sixNumber}</div>
		<div className='five'>{props.fifthNumber}</div>
		<div className='four'>{props.fourthNumber}</div>
		<div className='three'>{props.thirdNumber}</div>
		<div className='two'>{props.secondNumber}</div>
		<div className='one'>{props.firstNumber}</div>
	  </div>
	);
  }
  MyCounter.propTypes = {
	sixNumber: PropTypes.number,
	fifthNumber: PropTypes.number,
	fourthNumber: PropTypes.number,
	thirdNumber: PropTypes.number,
	secondNumber: PropTypes.number,
	firstNumber: PropTypes.number,
  };
  
  let theCounter = 0;
  setInterval(function(){
	const six = Math.floor (theCounter % 100000);
	const five = Math.floor (theCounter%10000);
	const four = Math.floor (theCounter%1000);
	const three = Math.floor (theCounter%100);
	const two = Math.floor (theCounter%10);
	const one = Math.floor (theCounter%1);
	theCounter++;
  },100000)

export default Home;