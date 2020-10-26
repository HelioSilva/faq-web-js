import { useState, useEffect } from "react";
import Header from "../../components/headerHome/index";

import ItemQuestion from "../../components/itemQuestion";
import api from "../../Services/api";
import { BodyHome } from "../../styles/home/style";

export interface iQuestion {
  id: string;
  titulo: string;
  acessos: string;
  autor: string;
  answers: iAnswers[];
}

interface iAnswers {
  id: string;
  text: string;
  autor: string;
  question_id: string;
}

const Home = () => {
  const [questions, setQuestions] = useState<iQuestion[]>([]);

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
            key={itemDetail.id}
            titulo={itemDetail.titulo}
            autor={itemDetail.autor}
            qtdRespostas={itemDetail.answers.length}
            qtdAcesso={itemDetail.acessos}
            url={`/question/${itemDetail.id}`}
          />
        ))}
      </BodyHome>
    </div>
  );
};

export default Home;
