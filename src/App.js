import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch("https://swapi.dev/api/people/?search=")
    .then((result) => result.json())
    .then((data) => {
      console.log(data.results)
    })
  },[])


  return (
    <div className="App">
      <input type="text" placeholder="Ingresa un nombre"/>
      <button>Buscar</button>
      <div>
        {users.name} {users.height} {users.mass} {users.hair_color} {users.skin_color} {users.eye_color} {users.birth_year} {users.gender}
      </div>
    </div>
  );
}

export default App;
