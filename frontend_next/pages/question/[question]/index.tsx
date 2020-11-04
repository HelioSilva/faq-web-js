import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import api from "../../../Services/api";

import React from "react";
import Header from "../../../components/header";
import { BodyHome } from "../../../styles/home/style";
import { iQuestion } from "..";
import {
  ContentQuestion,
  HeaderItemAnswer,
} from "../../../styles/question/index";

import dynamic from "next/dynamic";

import { ItemAnswer } from "../../../styles/question/index";

import { IoMdCreate } from "react-icons/io";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

import Link from "next/link";

const ViewQuestion = () => {
  const [loading, setLoading] = useState(true);
  const [dataQuestion, setDataquestion] = useState<iQuestion>({
    answers: [],
  } as iQuestion);

  const router = useRouter();
  const { question } = router.query;
  console.log(router.query);

  const countViewPage = useCallback(async () => {
    const res = await api.post(`/questions/${question}/view`);
    console.log(res.status === 200 ? "View count ok" : "View count fail");
  }, []);

  const getRequestQuestion = useCallback(async () => {
    const questionData = await api.get(`/questions/${question}`);

    if (questionData.status === 200) {
      setDataquestion(questionData.data.questions[0] as iQuestion);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    countViewPage();
    getRequestQuestion();
  }, []);

  const modules = {
    toolbar: false,
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
            <h2>{dataQuestion.titulo}</h2>
            <h5>{dataQuestion.autor}</h5>
            <p>{dataQuestion.answers.length}</p>
            <IoMdCreate href={"/"}>Editar</IoMdCreate>
          </div>
          <div>
            <Link href={`/question/${dataQuestion.id}/answer/create`}>
              Adicionar resposta
            </Link>

            <Link href={`/question/${dataQuestion.id}/edit`}>
              Editar pergunta
            </Link>
            <Link href={`/question/${dataQuestion.id}/delete`}>
              Remover dúvida
            </Link>
          </div>
        </ContentQuestion>

        {dataQuestion.answers.length > 0 ? (
          dataQuestion.answers.map((itemDetail) => (
            <ItemAnswer>
              <HeaderItemAnswer>
                <p>Resposta</p>
                <p>Autor: {itemDetail.autor}</p>
              </HeaderItemAnswer>
              <QuillNoSSRWrapper
                theme="snow"
                readOnly={true}
                modules={modules}
                formats={formats}
                value={itemDetail.text}
                style={{
                  margin: 0,
                  // minHeight: "75px",
                  background: "#eeeeee",
                }}
              />
            </ItemAnswer>
          ))
        ) : loading == true ? (
          <p>loading!</p>
        ) : (
          <p>Nenhuma resposta encontrada!</p>
        )}
      </BodyHome>
    </>
  );
};

export default ViewQuestion;
