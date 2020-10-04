import Header from "../components/header/index";
import ItemQuestion from "../components/itemQuestion";

const Home = () => {
  return (
    <div>
      <Header />

      <ItemQuestion qtdAcesso="24" url="http://globo.com.br" />
    </div>
  );
};

export default Home;
