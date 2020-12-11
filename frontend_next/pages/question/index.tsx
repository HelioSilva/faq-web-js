import { useState, useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/headerHome/index";

import ItemQuestion from "../../components/itemQuestion";
import Container from "../../components/_systemUI/container";
import { useQuestion } from "../../context/QuestionContext";
import api from "../../Services/api";
import { BodyHome } from "../../styles/home/style";
import { ReactSVG } from "react-svg";

export interface iQuestion {
  id: string;
  titulo: string;
  acessos: string;
  autor: string;
  autor_id: string;
  answers: iAnswers[];
  createdAt: string;
  updatedAt: string;
}

interface iAnswers {
  id: string;
  text: string;
  autor: string;
  question_id: string;
}

const Home = () => {
  const { questions } = useQuestion();

  return (
    <div>
      <Header />
      <BodyHome>
        {questions.length > 0 ? (
          questions.map((itemDetail) => (
            <ItemQuestion
              id={itemDetail.id}
              key={itemDetail.id}
              titulo={itemDetail.titulo}
              autor={itemDetail.autor}
              autor_id={itemDetail.autor_id}
              qtdRespostas={itemDetail.answers.length}
              qtdAcesso={itemDetail.acessos}
              url={`/question/${itemDetail.id}/`}
            />
          ))
        ) : (
          <Container flex col flexCenter>
            <img
              src={"/blog.svg"}
              style={{ height: 300, width: 300 }}
              alt="website logo"
            />
            <h5 style={{ color: "#ccc" }}>Nenhuma questão encontrada</h5>
          </Container>
        )}
      </BodyHome>
      <Footer />
    </div>
  );
};

export default Home;
