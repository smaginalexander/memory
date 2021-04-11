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
  console.log(process.env.PUBLIC_URL);
  // при загрузке компонента получим списки котов
  React.useEffect(() => {
    catApi.getCatList()
      .then(res => setCatCards(res))
      .catch(err => console.log(err))
  }, []);

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
