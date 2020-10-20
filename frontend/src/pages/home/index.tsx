import React from "react";
import QuestionBox from "../../components/itemQuestion/index";
import Header from "../../components/header/index";
import { Topo } from "./style";
import BodyFaq from "../../components/BodyFaq";

const Home: React.FC = () => (
  <>
    <Topo>
      <Header />
    </Topo>
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
    </BodyFaq>
  </>
);
export default Home;
