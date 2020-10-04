import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import Header from "../../components/header/index";

import ItemQuestion from "../../components/itemQuestion";
import api from "../../Services/api";

import { BodyHome } from "../../styles/Home/style";

interface opa {
  id: string;
  titulo: string;
  acessos: string;
  autor: string;
}

interface dataQuestions {
  dados: opa[];
}

const Home = () => {
  const [questions, setQuestions] = useState<opa[]>([]);

  useEffect(() => {
    (async () => {
      const res = await api.get("/questions");

      const dados = res.data;
      console.log(dados);
      setQuestions(dados.questions);
    })();
  }, []);

  return (
    <div>
      <Header />
      <BodyHome>
        {questions.map((itemDetail) => (
          <ItemQuestion
            titulo={itemDetail.titulo}
            autor={itemDetail.autor}
            qtdRespostas="2"
            qtdAcesso={itemDetail.acessos}
            url={`/question/${itemDetail.id}`}
          />
        ))}
      </BodyHome>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<dataQuestions> = async () => {
//   const res = await api.get("/questions");

//   const questions = res.data;

//   return {
//     props: {
//       dados: questions,
//     },
//   };
// };

export default Home;
