import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../styles/index.css';
import MyCounter from './components/Home';

let theCounter = 0;


const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(function() {
  let six = Math.floor(theCounter / 100000) % 10;
  let five = Math.floor(theCounter / 10000) % 10;
  let four = Math.floor(theCounter / 1000) % 10;
  let three = Math.floor(theCounter / 100) % 10;
  let two = Math.floor(theCounter / 10) % 10;
  let one = theCounter % 10 ;

  console.log(theCounter);

  root.render(
    <MyCounter
    firstNumber={one}
    secondNumber={two}
    thirdNumber={three}
    fourthNumber={four}
    fifthNumber={five}
    sixNumber={six}
    />
  );

  theCounter++;
}, 1000); 
