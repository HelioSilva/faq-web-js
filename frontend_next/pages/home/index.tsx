import Header from "../../components/header/index";

import ItemQuestion from "../../components/itemQuestion";

import { BodyHome } from "../../styles/Home/style";

const Home = () => {
  return (
    <div>
      <Header />
      <BodyHome>
        <ItemQuestion
          titulo="Como fazer isso ou aquilo"
          autor="Helio Silva"
          qtdRespostas="2"
          qtdAcesso="24"
          url="http://globo.com.br"
        />
        <ItemQuestion
          titulo="Como fazer isso ou aquilo"
          autor="Helio Silva"
          qtdRespostas="2"
          qtdAcesso="24"
          url="http://globo.com.br"
        />
      </BodyHome>
    </div>
  );
};

export default Home;
