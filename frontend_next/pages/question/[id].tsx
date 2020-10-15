import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import api from "../../Services/api";

import React from "react";
import Header from "../../components/header";
import { BodyHome } from "../../styles/home/style";
import { iQuestion } from ".";

const ViewQuestion = () => {
  const [dataQuestion, setDataquestion] = useState<iQuestion>({
    answers: [],
  } as iQuestion);

  const router = useRouter();
  const { id } = router.query;

  const setViewPage = useCallback(async () => {
    const res = await api.post(`/questions/${id}/view`);
    console.log(res.status === 200 ? "View count ok" : "View count fail");
  }, []);

  const getRequestQuestion = useCallback(async () => {
    const questionData = await api.get(`/questions/${id}`);

    if (questionData.status === 200) {
      setDataquestion(questionData.data.questions[0] as iQuestion);
      console.log("data >  ", dataQuestion);
    }
  }, []);

  useEffect(() => {
    setViewPage();
    getRequestQuestion();
  }, []);
  return (
    <>
      <Header />
      <BodyHome>
        {dataQuestion.answers.length > 0 ? (
          dataQuestion.answers.map((itemDetail) => (
            <div key={itemDetail.id}>
              <h1>Resposta:{itemDetail.text}</h1>
              <h4>
                Autor: <b>{itemDetail.autor}</b>
              </h4>
            </div>
          ))
        ) : (
          <p>Lista vazia</p>
        )}
      </BodyHome>
    </>
  );
};

export default ViewQuestion;
