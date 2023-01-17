import User from "./components/User";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState(null);
  const [caracter, setCaracter] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/people/?search=" + caracter)
      .then((result) => result.json())
      .then((data) => {
        if(caracter.length>0){
          setUsers(data.results)
        }
      });
  }, [caracter]);

  const caracterSearch = (e) => {
    setCaracter(e.target.value);
  };

  return (
    <div className="App">
      <input className="border mt-6"
        type="text"
        placeholder="Ingresa un nombre"
        onChange={caracterSearch}
      />
      {users ? (
        <div className="max-w-lg mx-auto">
          {users.map((user) => {
          return (
             
              <User user={user} key={user.name} />
            
          );
        })}
        </div>
      ) : (
        <span className="mx-4">cargando...</span>
      )}
    </div>
  );
}

export default App;
