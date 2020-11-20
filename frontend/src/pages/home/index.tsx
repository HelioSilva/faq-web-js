import React, { useState, useEffect } from "react";
import QuestionBox from "../../components/itemQuestion/index";
import Header from "../../components/header/index";
import BodyFaq from "../../components/BodyFaq";
import Cards from  '../../components/Cards';
import Card from "../../components/Card";
import Api from "../../Services/api";

const Home: React.FC = () => {

  // useState
  const[qtdAcessos, setqtdAcessos] = useState(0);  
  const[titulo, setTitulo] = useState("Sem titulo");  


  async function BuscaApi() {
    const {data}= await Api.get("/questions");
    
    console.log(data.questions[0].titulo);

    setTitulo(data.questions[0].titulo);
    setqtdAcessos(data.questions[0].acessos);

    return data;
  }

  //useEffect
  useEffect(()=>{
    // AddQtd()
    BuscaApi();
   
  } , [])
  
  function AddQtd(){
    let newQtd = qtdAcessos+1;
    setqtdAcessos(newQtd)
  } 

  return(
    <>
    <Header />
    <BodyFaq>
      <QuestionBox
        qtdAcessos={ qtdAcessos }
        url="https:debian.org"
        titulos= { titulo }
        qtdRespostas="8"
        qtdAcesso="214"
        autor="Helio Silva"
      />
      
      <a onClick={()=>{AddQtd()}}>ok</a>
      <QuestionBox
        qtdAcessos="23"
        url="https:google.com"
        titulos="Erro: verifique parâmetro 99!"
        qtdRespostas="2"
        qtdAcesso="7"
        autor="Ronald Santos"
      />
      <QuestionBox
        qtdAcessos="1"
        url="https:google.com"
        titulos="Errotal no G6!"
        qtdRespostas="200"
        qtdAcesso="27"
        autor="Tiago"
      />
      <QuestionBox
        qtdAcessos="6"
        url="https:google.com"
        titulos="Coiso"
        qtdRespostas="9"
        qtdAcesso="7"
        autor="Ronald Santos"
      />
      <QuestionBox
        qtdAcessos="50"
        url="https:google.com"
        titulos="Coisado"
        qtdRespostas="1"
        qtdAcesso="70"
        autor="Helio Silva"
      />
    </BodyFaq>
    <Cards>
      <Card href="/ronald" img_url="https://avatars3.githubusercontent.com/u/33934560?s=400&u=f0be2b4c2705f65658ae5899869d98465e3846cd&v=4" img_alt="GitHub Ronaldss" title="GitHub" description="Ronaldss." />
      <Card href="/helio" img_url="https://avatars2.githubusercontent.com/u/12967010?s=400&u=896f6a60dad07044c0ad1d14c03597992933eb23&v=4" img_alt="Helio foto" title="GitHub" description="HelioSilva" />
    </Cards>
  </>
  )
}

export default Home;
