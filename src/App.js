
import Urlap from './component/Urlap';
import './App.css';
import DataService from './model/DataSevice';
import { useEffect } from 'react';
const DS = new DataService()
function App() {

  function kuld(urlapAdat){
    console.log(urlapAdat)//ez fogadja az urlap adatokat
    //itt küldöm az adatokat az adatbázisba
    //asszinkron híváshoz, useEffect hook-ot kell használni
    useEffect(()=>{
      DS.postData(vegpont, urlapAdat) 
    }, [])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Űrlap</h3>
      </header>
      <article>

        <Urlap kuld={kuld}/>
      </article>
    </div>
  );
}

export default App;
