import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../styles/index.css';
import { faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import Home from './components/Home';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Home firstNumber={one} secondNumber={two} thirdNumber={three} fourthNumber={four} fifthNumber={five} sixNumber={six} />
)
