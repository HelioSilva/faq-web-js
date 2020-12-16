import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import api from "../../../../Services/api";

import React from "react";
import Header from "../../../../components/header";
import { BodyHome } from "../../../../styles/home/style";
import { iQuestion } from "../..";

import dynamic from "next/dynamic";

import { ContentQuestion, ItemAnswer } from "../../../../styles/question/index";
import { useAuth } from "../../../../context/AuthContext";
import Btn from "../../../../components/button";
import {
  stateNotification,
  useQuestion,
} from "../../../../context/QuestionContext";
import Container from "../../../../components/_systemUI/container";
import TimeAgo from "javascript-time-ago";
// Portugues BR
import pt from "javascript-time-ago/locale/pt";
import GridContainer from "../../../../components/_systemUI/gridContainer";
import { BiArrowBack } from "react-icons/bi";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

TimeAgo.addLocale(pt);
const timeAgo = new TimeAgo("pt-PT");

const ViewQuestion = () => {
  const [dataQuestion, setDataquestion] = useState<iQuestion>({
    answers: [],
  } as iQuestion);

  const user = useAuth();
  const { handleNotification } = useQuestion();

  const [data, setData] = useState("");
  const router = useRouter();
  const { question } = router.query;

  const setAnswer = useCallback(async (texto: string) => {
    if (texto === "") return;

    const response = await api.post(`/questions/${question}/answer`, {
      text: texto,
      autor: user.name,
      autor_id: user.id,
    });

    if (response.status === 200) {
      handleNotification(
        stateNotification.sucess,
        "Resposta adicionada com sucesso!"
      );
    } else {
      handleNotification(
        stateNotification.error,
        "Resposta não enviada com sucesso!"
      );
    }

    router.push(`/question/${question}`);
  }, []);

  const getRequestQuestion = useCallback(async () => {
    const questionData = await api.get(`/questions/${question}`);

    if (questionData.status === 200) {
      setDataquestion(questionData.data.questions[0] as iQuestion);
    }
  }, []);

  useEffect(() => {
    getRequestQuestion();
  }, []);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      [{ align: [] }],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "code-block",
  ];

  return (
    <>
      <Header />
      <BodyHome>
        <ContentQuestion>
          <div>
            <GridContainer col={4} spacing={1} width={"300px"}>
              <BiArrowBack
                style={{ cursor: "pointer" }}
                onClick={() => {
                  router.back();
                }}
              />
            </GridContainer>
            <Container flex>
              <h1>{dataQuestion.titulo}</h1>
            </Container>
            <Container flex row>
              <Container
                flex
                col
                style={{
                  alignItems: "flex-start",
                  justifyContent: "stretch",
                }}
              >
                <p>{`Criado por:  ${dataQuestion.autor} ${timeAgo.format(
                  new Date(dataQuestion.createdAt ? dataQuestion.createdAt : 0)
                )}`}</p>
                <p>{`${dataQuestion.answers.length} respostas`} </p>
              </Container>
            </Container>
          </div>
        </ContentQuestion>

        <ItemAnswer>
          <QuillNoSSRWrapper
            theme="snow"
            readOnly={false}
            modules={modules}
            formats={formats}
            value={data}
            onChange={setData}
            placeholder={"Digite aqui a resolução desse problema"}
            style={{
              marginBottom: "40px",
            }}
          />
          <Btn
            primary
            value="Salvar"
            width="250px"
            onClick={async () => {
              await setAnswer(data);
            }}
          />
        </ItemAnswer>
      </BodyHome>
    </>
  );
};

export default ViewQuestion;
