import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import { Route, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  //передадим в Header, где будем использовать как условие для установки классов 
  const location = useLocation();

  fetch('https://api.thecatapi.com/v1/images/search?limit=25', {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '727b362f-5c6c-4d73-968d-40d05811e067'
    }
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))




  return (
    <div className="app">
      <Route path="/">
        <Header location={location} />
        <Main />
      </Route>
    </div>
  );
}

export default App;
