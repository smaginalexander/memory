import React, { useEffect, useLayoutEffect } from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './App.css';

function App() {
  const [result, setResult] = React.useState([{ try: 0, res: 0 }])
  const [count, setCount] = React.useState(0)
  const [currentUser, setCurrentUser] = React.useState({
    text: ''
  });
  const [victory, setVictory] = React.useState(false)

  useEffect(() => {
    if (count === 0) {
      setCount(JSON.parse(localStorage.getItem('allTrys')))
      setResult(JSON.parse(localStorage.getItem('allResults')))
    }
  }, [])

  function setTable(time) {
    let trys = count + 1
    setCount(trys)
    localStorage.setItem('allTrys', JSON.stringify(trys))
    setResult([...result, {
      try: trys,
      res: time
    }])
  }

  useEffect(() => {
    if (result !== null) {
      localStorage.setItem('allResults', JSON.stringify(result))
    } else if (result === null) {
      setResult([{ try: 0, res: 0 }])
    }
  }, [result])

  //сброс таблицы с результатами
  function reset() {
    localStorage.removeItem('allResults')
    localStorage.removeItem('allTrys')
    setResult([{ try: 0, res: 0 }])
  }

  function handleVictory() {
    setVictory(true)
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header victory={victory} setTable={setTable} reset={reset} />
        <Main handleVictory={handleVictory} result={result} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
