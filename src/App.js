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
        setUsers(data.results);
      });
  }, [caracter]);

  const caracterSearch = (e) => {
    setCaracter(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Ingresa un nombre"
        onChange={caracterSearch}
      />
      {users ? (
        users.map((user) => {
          return (
            <div key={user.name}>
              <User user={user} />
            </div>
          );
        })
      ) : (
        <span>cargando...</span>
      )}
    </div>
  );
}

export default App;
