import React from "react";
import QuestionBox from "../../components/itemQuestion/index";
import Header from "../../components/header/index";
import BodyFaq from "../../components/BodyFaq";
import Cards from  '../../components/Cards';
import Card from "../../components/Card";

const Home: React.FC = () => (
  <>
    <Header />
    <BodyFaq>
      <QuestionBox
        qtdAcessos="3"
        url="https:debian.org"
        titulos="Como gerar SPED FISCAL"
        qtdRespostas="8"
        qtdAcesso="214"
        autor="Helio Silva"
      />
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
      <Card href="/ronald" img_url="https://avatars3.githubusercontent.com/u/33934560?s=400&u=f0be2b4c2705f65658ae5899869d98465e3846cd&v=4" img_alt="GitHub Ronaldss" title="Ronald" description="Esta é a description." />
    </Cards>
  </>
);
export default Home;
