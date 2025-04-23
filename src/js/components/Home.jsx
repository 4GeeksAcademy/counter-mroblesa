import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons';

function MyCounter (props){
	return (
	  <div className='mainCounter'>
		<div className='time'><FontAwesomeIcon icon={faClock} /></div>
		<div className='sixNum'>{props.sixNumber}</div>
		<div className='fiveNum'>{props.fifthNumber}</div>
		<div className='fourNum'>{props.fourthNumber}</div>
		<div className='threeNum'>{props.thirdNumber}</div>
		<div className='twoNum'>{props.secondNumber}</div>
		<div className='oneNum'>{props.firstNumber}</div>
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
  
  
export default MyCounter;