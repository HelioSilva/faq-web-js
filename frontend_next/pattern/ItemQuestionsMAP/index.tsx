import React from "react";
import { Container } from "@material-ui/core";
import ItemQuestion from "../../components/itemQuestion";
import { useQuestion } from "../../context/QuestionContext";

const PatternItemQuestion = () => {
  const { questions } = useQuestion();

  return (
    <>
      {questions.length > 0 ? (
        questions.map((itemDetail) => (
          <ItemQuestion
            id={itemDetail.id}
            key={itemDetail.id}
            titulo={itemDetail.titulo}
            autor={itemDetail.createdAt}
            autor_id={itemDetail.autor_id}
            qtdRespostas={itemDetail.answers.length}
            qtdAcesso={itemDetail.acessos}
            url={`/question/${itemDetail.id}/`}
          />
        ))
      ) : (
        <Container>
          <img
            src={"/blog.svg"}
            style={{ height: 300, width: 300 }}
            alt="website logo"
          />
          <h5 style={{ color: "#ccc" }}>Nenhum artigo encontrado</h5>
        </Container>
      )}
    </>
  );
};

export default PatternItemQuestion;
