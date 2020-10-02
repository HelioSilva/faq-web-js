import React from "react";
import Ronald from "../../components/qtdAcessos/index";
import BotaoPadrao from "../../components/buttons/index";

const Home: React.FC = () => (
  <>
    <h1>FaqWeb</h1>
    <Ronald notas="15" />
    <h1>exemplo botão</h1>
    <BotaoPadrao name="OK" />
    <BotaoPadrao name="Cancelar" tamanho="350" cor="#fff" />
  </>
);

export default Home;
