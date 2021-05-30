import React from "react";

import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import api from "../../Services/api";

import { BodyHome } from "../../styles/home/style";
import { iQuestion } from "../../domain/entities/question";

import { ContentQuestion, ItemAnswer } from "../../styles/question/index";
import { useAuth } from "../../context/AuthContext";
import Btn from "../../components/button";
import {
  stateNotification,
  useFunctionsQuestion,
  useQuestion,
} from "../../context/QuestionContext";
import Container from "../../components/_systemUI/container";
import TimeAgo from "javascript-time-ago";
// Portugues BR
import pt from "javascript-time-ago/locale/pt";
import GridContainer from "../../components/_systemUI/gridContainer";
import { BiArrowBack } from "react-icons/bi";
import Menu from "../../components/menu";
import { FroalaEditor } from "../../pattern/editorText";

import dynamic from "next/dynamic";

import { buttonList } from "suneditor-react";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

TimeAgo.addLocale(pt);
const timeAgo = new TimeAgo("pt-PT");

export enum Tipo {
  "CREATE" = "CREATE",
  "UPDATE" = "UPDATE",
}

type ActionForm = {
  mode: Tipo;
};

const FormAnswer = (valueForm: ActionForm) => {
  const [dataQuestion, setDataquestion] = useState<iQuestion>({
    answers: [],
  } as iQuestion);

  const { answerSelect } = useQuestion();
  const user = useAuth();
  const { handleNotification } = useFunctionsQuestion();

  const [data, setData] = useState(() => {
    return valueForm.mode === Tipo.CREATE ? "" : answerSelect.text;
  });
  const router = useRouter();
  const { question } = router.query;

  const submitAPI = useCallback(async (texto: string) => {
    if (texto === "") return;

    if (valueForm.mode === Tipo.CREATE) {
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
    }

    if (valueForm.mode === Tipo.UPDATE) {
      const response = await api.put(`/questions/answer/${answerSelect.id}`, {
        text: texto,
      });
      if (response.status === 200) {
        handleNotification(
          stateNotification.sucess,
          "Resposta atualizada com sucesso!"
        );
      } else {
        handleNotification(stateNotification.error, "Resposta não atualizada!");
      }
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
          <SunEditor
            lang="pt_br"
            onChange={setData}
            defaultValue={data}
            setOptions={{
              mode: "classic",
              buttonList: buttonList.complex,
            }}
          />
          {/* <FroalaEditor
            config={{
              placeholder: "Edit Me",
              events: {
                "froalaEditor.image.uploaded": () => {
                  console.log("Froala Images .............");
                },
                image: {
                  loaded: function (response) {
                    // Do something here.
                    // this is the editor instance.
                    console.log("IMAGE");
                    console.log(this);
                  },
                },
              },
            }}
            model={data}
            onModelChange={setData}
          /> */}
          <Btn
            primary
            value={valueForm.mode === Tipo.CREATE ? `Salvar` : `Atualizar`}
            width="250px"
            onClick={async () => {
              await submitAPI(data);
            }}
          />
        </ItemAnswer>
      </BodyHome>
    </>
  );
};

export default FormAnswer;
