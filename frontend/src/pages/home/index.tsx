import React from "react";
import Ronald from "../../components/qtdAcessos/index";
import BotaoPadrao from "../../components/buttons/index";
import QuestionBox from "../../components/itemQuestion/index";

const Home: React.FC = () => (
  <>
    <h1>Componentes - FaqWeb</h1>
    Number of accesses
    <Ronald notas="15" />
    <br />
    Example buttons
    <BotaoPadrao name="Cancelar" tamanho="350" cor="#fff" />
    <br />
    QuestionBox
    <QuestionBox
      qtdAcessos="3"
      url="https:debian.org"
      titulos="Como gerar SPED FISCAL"
      qtdRespostas="8"
      qtdAcesso="214"
      autor="Ronald Santos"
    />
  </>
);

export default Home;
