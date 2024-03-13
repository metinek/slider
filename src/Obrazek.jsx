import './Obrazek.css';
import React from 'react';
//obrazki
import previous from './img/previous.png';
import next from './img/next.png';

function Obrazek(props) {
  return (
    <div className="Obrazek">
        <img className="Grafika" src={props.grafiki.grafika}/><br/>

        <button onClick={props.previous}>
            <img src={previous} alt='poprzedni'/>
        </button>

        <button onClick={props.next}>
            <img src={next} alt='następny'/>
        </button>

    </div>
  );
}

export default Obrazek;
