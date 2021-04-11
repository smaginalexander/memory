import { Route, useLocation } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
// запросы к API
import catApi from '../../utils/CatApi';
import './App.css';

function App() {
  //передадим в компоненты, где будем использовать как условие 
  const location = useLocation();
  //массивы со списком всех котов и избранных
  const [catCards, setCatCards] = React.useState([]);
  const [savedCatCards, setSavedCatCards] = React.useState([]);
  // для бесконечного скролла
  const [countPage, setCountPage] = React.useState(1)
  const [isFtching, setIsFitching] = React.useState(true)

  //установка значения true при нужной высоте
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setIsFitching(true)
    }
  }

  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, []);
  //когда isFtching меняется получим списки котов
  React.useEffect(() => {
    if (isFtching) {
      catApi.getCatList(countPage)
        .then((res) => {
          setCatCards([...catCards, ...res])
          setCountPage(count => count + 1)
        })
        .catch(err => console.log(err))
        .finally(() => setIsFitching(false))
    }
  }, [isFtching]);

  React.useEffect(() => {
    catApi.getSavedCat()
      .then((res) => {
        setSavedCatCards(res)
      })
      .catch(err => console.log(err))
  }, []);

  // получить всех избранных котов и сохранить на клиенте
  const getSavedCatList = () => {
    catApi.getSavedCat()
      .then((res) => {
        localStorage.setItem('savedCats', JSON.stringify(res))
        setSavedCatCards(JSON.parse(localStorage.getItem('savedCats')))
      })
      .catch(err => console.log(err))
  }

  // сохранить кота
  const setSavedCat = (catId) => {
    catApi.saveCat(catId)
      .then(() => {
        getSavedCatList()
      })
  }

  // удалить кота
  const deleteSavedCat = (catId) => {
    catApi.deleteCat(catId)
      .then(() => {
        getSavedCatList()
      })
  }

  return (
    <div className="app">
      <Header location={location} />
      <Route exact path="/">
        <Main
          catCards={catCards}
          savedCatCards={savedCatCards}
          setSavedCat={setSavedCat}
          deleteSavedCat={deleteSavedCat}
          location={location}
        />
      </Route>
      <Route path="/saved-cats">
        <Main
          catCards={catCards}
          savedCatCards={savedCatCards}
          setSavedCat={setSavedCat}
          deleteSavedCat={deleteSavedCat}
          location={location}
        />
      </Route>
    </div>
  );
}

export default App;
