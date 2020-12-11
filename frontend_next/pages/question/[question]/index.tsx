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
import Link from "next/link";
import { MdCreate, MdDelete } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import Container from "../../../components/_systemUI/container";
import { useAuth } from "../../../context/AuthContext";
import Badge, { ColorButtom } from "../../../components/badge";
import { GridContainer } from "../../../components/_systemUI/cssGridContainer";

import TimeAgo from "javascript-time-ago";

// Portugues BR
import pt from "javascript-time-ago/locale/pt";

TimeAgo.addLocale(pt);
const timeAgo = new TimeAgo("pt-PT");

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const ViewQuestion = () => {
  const { urlImage, id } = useAuth();
  const [loading, setLoading] = useState(true);
  const [dataQuestion, setDataquestion] = useState<iQuestion>({
    answers: [],
  } as iQuestion);
  const router = useRouter();
  const { question } = router.query;

  const actionDelete = () => {
    if (dataQuestion.autor_id === id && dataQuestion.answers.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleCreateAnswer = (path: string) => {
    router.push(path);
  };

  const handleEdite = (path: string) => {
    router.push(path);
  };
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
            <GridContainer col={4} spacing={1} width={"300px"}>
              <BiArrowBack
                style={{ cursor: "pointer" }}
                onClick={() => {
                  router.push("/");
                }}
              />
              <Badge
                variant={ColorButtom.primary}
                fun={() => {
                  handleEdite(`/question/${question}/edit`);
                }}
                light
                disabled={dataQuestion.autor_id !== id}
              >
                <MdCreate color={"#3d98c2"} />
                <p>Editar</p>
              </Badge>
              <Badge
                variant={ColorButtom.danger}
                disabled={actionDelete()}
                light
              >
                <MdDelete color={"#ce4f4f"} />
                <p>Deletar</p>
              </Badge>
              <Badge
                variant={ColorButtom.add}
                light
                fun={() => {
                  handleCreateAnswer(
                    `/question/${dataQuestion.id}/answer/create`
                  );
                }}
              >
                <MdCreate color={ColorButtom.add} />
                <p>Nova Resposta</p>
              </Badge>
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
          {/* <div>
            <Link href={`/question/${dataQuestion.id}/answer/create`}>
              Adicionar resposta
            </Link>
          </div> */}
        </ContentQuestion>

        {dataQuestion.answers.length > 0 ? (
          dataQuestion.answers.map((itemDetail) => (
            <ItemAnswer key={itemDetail.id}>
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
