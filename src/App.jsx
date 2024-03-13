import './App.css';
import Obrazek from './Obrazek.jsx';
import React from 'react';
import { useState } from 'react';
//obrazki
import pepe from './img/pepe.jpg';
import pepe2 from './img/pepe2.jpg';
import pepesmoker from './img/pepesmoker.gif';
import doge from './img/doge.jpg';
import samochod from './img/samochod.jpg';
//gify
import popcat from './img/popcat.gif';
import major from './img/major.gif';
import major2 from './img/major2.gif';

//tablica
const grafiki = [
  {id:0, grafika: pepe},
  {id:1, grafika: pepesmoker},
  {id:2, grafika: pepe2},
  {id:3, grafika: doge},
  {id:4, grafika: samochod},
  {id:5, grafika: popcat},
  {id:6, grafika: major},
  {id:7, grafika: major2}
];



function App() {
  let [nr, setNr] = useState(0);

  function Previous() {
    if (nr>0)
      setNr(nr-1);
  }

  function Next() {
    if (nr<grafiki.length-1)
      setNr(nr+1);
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wypok.pl</h1>
      </header>

      <Obrazek 
      grafiki={grafiki[nr]}
      previous={() => Previous()} 
      next={() => Next()} 
      />

    </div>
  );
}

export default App;
