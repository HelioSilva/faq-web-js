import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import api from "../../../Services/api";

import { BodyHome } from "../../../styles/home/style";
import { iQuestion } from "../../../domain/entities/question";
import {
  ContentQuestion,
  HeaderItemAnswer,
} from "../../../styles/question/index";

import { ItemAnswer } from "../../../styles/question/index";

import { MdCreate, MdDelete } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import Container from "../../../components/_systemUI/container";
import { useAuth } from "../../../context/AuthContext";
import Badge, { ColorButtom } from "../../../components/badge";
import { GridContainer } from "../../../components/_systemUI/cssGridContainer";

import TimeAgo from "javascript-time-ago";

// Portugues BR
import pt from "javascript-time-ago/locale/pt";
import {
  stateNotification,
  useFunctionsQuestion,
} from "../../../context/QuestionContext";
import Menu from "../../../components/menu";
import dynamic from "next/dynamic";

const PatternItemAnswer = dynamic(() => import("../../../pattern/itemAnswer"), {
  loading: () => <p>Carregando Artigo</p>,
});

const ViewQuestion = () => {
  TimeAgo.addLocale(pt);
  const timeAgo = new TimeAgo("pt-PT");

  const { id } = useAuth();

  const {
    functionSearch,
    handleNotification,
    setAnswer,
  } = useFunctionsQuestion();
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState("");
  const [dataQuestion, setDataquestion] = useState<iQuestion>({
    answers: [],
  } as iQuestion);
  const router = useRouter();

  useEffect(() => {
    if (
      typeof router.query.question !== undefined &&
      router.query.question !== ""
    ) {
      setQuestion(String(router.query.question));
      countViewPage(String(router.query.question));
      getRequestQuestion(String(router.query.question));
    }
  }, []);

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

  const handleDelete = useCallback(async () => {
    const questionData = await api.delete(`/questions/${question}`);

    if (questionData.status === 200) {
      handleNotification(
        stateNotification.sucess,
        "Registro deletado com sucesso!"
      );
      await functionSearch("");
      router.push("/");
    } else {
      handleNotification(stateNotification.sucess, "Falha ao deletar!");
    }
  }, [question]);

  const handleDeleteAnswer = useCallback(async (ident) => {
    const answerData = await api.delete(`/questions/answer/${ident}`);

    if (answerData.status === 200) {
      handleNotification(
        stateNotification.sucess,
        "Registro deletado com sucesso!"
      );
      await functionSearch("");
      router.push("/");
    } else {
      handleNotification(stateNotification.sucess, "Falha ao deletar!");
    }
  }, []);

  const countViewPage = async (param: string) => {
    console.log("count view question : " + param);
    if (param && param !== "") {
      const res = await api.post(`/questions/${param}/view`);
      console.log(res.status === 200 ? "View count ok" : "View count fail");
    }
  };

  const getRequestQuestion = async (param: string) => {
    if (param) {
      const questionData = await api.get(`/questions/${param}`);

      if (questionData.status === 200) {
        setDataquestion(questionData.data.questions[0] as iQuestion);
      }
    }
  };

  return (
    <>
      <Menu />
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
                fun={() => {
                  handleDelete();
                }}
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
        </ContentQuestion>

        {dataQuestion.answers.length > 0 ? (
          dataQuestion.answers.map((itemDetail) => (
            <ItemAnswer key={itemDetail.id}>
              <HeaderItemAnswer>
                <p>{`Resposta: ${itemDetail.autor}`}</p>

                <GridContainer col={2} spacing={1}>
                  <Badge
                    variant={ColorButtom.primary}
                    fun={() => {
                      setAnswer(itemDetail);
                      console.log(router);
                      router.push(router.asPath + "/answer/edit");
                    }}
                    disabled={itemDetail.autor_id !== id}
                  >
                    <MdCreate color={"#ffffff"} />
                    <p>Editar</p>
                  </Badge>
                  <Badge
                    variant={ColorButtom.danger}
                    fun={async () => {
                      await handleDeleteAnswer(itemDetail.id);
                    }}
                    disabled={itemDetail.autor_id !== id}
                  >
                    <MdDelete color={"#e4e4e4"} />
                    <p>Deletar</p>
                  </Badge>
                </GridContainer>
              </HeaderItemAnswer>
              <Container
                style={{
                  // background: "#f0efef",
                  // padding: "24px 12px",
                  marginBottom: "20px",
                  // height: "100vh",
                }}
              >
                <PatternItemAnswer defaultValue={itemDetail.text} />
              </Container>
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
