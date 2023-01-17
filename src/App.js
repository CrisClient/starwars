import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState(null);
  const [caracter, setCaracter]=useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/people/?search="+caracter)
    .then((result) => result.json())
    .then((data) => {
      console.log(data.results)
    })
  },[caracter])

  const caracterSearch=(e)=>{
    setCaracter(e.target.value);
  }

  return (
    <div className="App">
      <input type="text" placeholder="Ingresa un nombre" onChange={caracterSearch}/>
      <button>Buscar</button>
    </div>
  );
}

export default App;
