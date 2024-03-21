import React, { useEffect, useState } from "react"; // Importa o hook useEffect e useState
import api from "./services/api"; //  Importa a variável api que criamos anteriormente.

export default function App() {
  const [user, setUser] = useState(); // Cria um estado para armazenar o usuário

  useEffect(() => { // Faz a requisição para a API do GitHub e armazena os dados do usuário no estado
    api
      .get("/users/romulo27") // Faz a requisição para a API do GitHub
      .then((response) => setUser(response.data)) // Armazena os dados do usuário no estado
      .then((response) => {console.log(response)}) // Exibe os dados do usuário no console
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err); // Exibe um alerta em caso de erro
      });
  }, []);

  return (
    <div className="App"> {/* Exibe os dados do usuário */}
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  );
}