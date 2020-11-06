import React from "react";
import Button from "../../components/buttons/index_old";
import Topo from "../../components/Topo";


function Question() {
  return(
    <>
      <Topo />
      <Button 
      cor="red" 
      name = "Editar"
      />
      <Button 
      cor="blue" 
      name = "Remover"
      />
    </>
  )

};

export default Question;
