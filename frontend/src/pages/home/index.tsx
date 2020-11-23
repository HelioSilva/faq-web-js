import React, { useState, useEffect } from "react";
import QuestionBox from "../../components/itemQuestion/index";
import Header from "../../components/header/index";
import BodyFaq from "../../components/BodyFaq";
import Cards from  '../../components/Cards';
import Card from "../../components/Card";
import Api from "../../Services/api";

interface iQuestions {
  id:string;
  acessos:number;
  titulo: string;
  qtdAcessos: string;
  autor: string;
  answers: [];
}

const Home: React.FC = () => {

  // useState
  const[questions, setQuestions] = useState([]);  


  // Trazendo informações da API
  async function BuscaApi() {
    const {data} = await Api.get("/questions");
    
    // Disponibilizando informações da API P/ o escopo referente
      setQuestions(data.questions);
  };

  //useEffect
  useEffect(()=>{
    // AddQtd()
    BuscaApi();
   
  } , [])

  return(
    <>
    <Header />
    <BodyFaq>

      {/* <a onClick={()=>{AddQtd()}}>ok</a> */}

      {
        questions.map((item:iQuestions)=>
          (
            <QuestionBox key={item.id}
              qtdAcessos={ item.acessos }
              url="https:debian.org"
              titulos= { item.titulo }
              qtdRespostas={ item.answers.length }
              autor= { item.autor }
            />
          )
        )
      }
      
    </BodyFaq>
    <Cards>
      <Card href="/ronald" img_url="https://avatars3.githubusercontent.com/u/33934560?s=400&u=f0be2b4c2705f65658ae5899869d98465e3846cd&v=4" img_alt="GitHub Ronaldss" title="GitHub" description="Ronaldss." />
      <Card href="/helio" img_url="https://avatars2.githubusercontent.com/u/12967010?s=400&u=896f6a60dad07044c0ad1d14c03597992933eb23&v=4" img_alt="Helio foto" title="GitHub" description="HelioSilva" />
    </Cards>
  </>
  )
}

export default Home;
