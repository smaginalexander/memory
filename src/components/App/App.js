import { Route, useLocation } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
// запросы к API
import catApi from '../../utils/CatApi';
import './App.css';

function App() {
  //массивы со списком всех котов и избранных
  const [catCards, setCatCards] = React.useState([]);
  const [savedCatCards, setSavedCatCards] = React.useState([]);

  //передадим в компоненты, где будем использовать как условие 
  const location = useLocation();

  // при загрузке компонента, сделаем запрос к API и получим списки котов
  React.useEffect(() => {
    getSavedCatList();
    catApi.getCatList()
      .then(res => setCatCards(res))
      .catch(err => console.log(err))
  }, []);

  // получить всех избранных котов
  const getSavedCatList = () => {
    catApi.getSavedCat()
      .then(res => setSavedCatCards(res))
      .catch(err => console.log(err))
  }

  // сохранить кота
  const setSavedCat = (catId) => {
    catApi.saveCat(catId)
    getSavedCatList()
    console.log(savedCatCards);
  }

  // удалить кота
  const deleteSavedCat = (catId) => {
    catApi.deleteCat(catId)
    getSavedCatList()
  }

  return (
    <div className="app">
      <Header location={location} />
      <Route path="/">
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
