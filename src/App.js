import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch("https://swapi.dev/api/people/?search=")
    .then((result) => result.json())
    .then((data) => {
      console.log(data)
    })
  })


  return (
    <div className="App">
      Hola
    </div>
  );
}

export default App;
