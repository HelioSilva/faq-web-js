import React, { useState } from "react";
import Button from "../../components/buttons/index_old";
import Topo from "../../components/Topo";
import api from "../../Services/api";

function Question() {
  const [titulo, setTitulo] = useState("default");
  const [autor, setAutor] = useState("");
  const [acessos, setAcessos] = useState(0);

  async function enviarQuestion(e) {
    e.preventDefault();
    console.log("pegando dados da api...");
    const resposta = await api.post("/questions", {
      titulo: titulo,
      autor: autor,
      autor_id: "e65daf66-dba2-4bb7-b22f-c836d193971",
      acessos: acessos,
    });

    console.log(resposta);
  }

  return (
    <>
      <Topo />
      <Button cor="red" name="Editar" />
      <Button cor="blue" name="Remover" />

      <form onSubmit={enviarQuestion}>
        <label>
          Nome:
          <input
            type="text"
            value={titulo}
            onChange={(e) => {
              setTitulo(e.target.value);
            }}
          />
          <input
            type="text"
            value={autor}
            onChange={(e) => {
              setAutor(e.target.value);
            }}
          />
          <input
            type="number"
            value={acessos}
            onChange={(e) => {
              setAcessos(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}

export default Question;
