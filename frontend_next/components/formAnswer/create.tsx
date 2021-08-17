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

import dynamic from "next/dynamic";

//import template
import Modelo1 from "../templates/modelo1";
import Modelo2 from "../templates/modelo2";
//-------------------

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const buttonList = [
  ["undo", "redo"],
  ["font", "fontSize", "formatBlock"],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["removeFormat"],
  "/",
  ["fontColor", "hiliteColor"],
  ["outdent", "indent"],
  ["align", "horizontalRule", "list", "table"],
  ["link", "image", "video"],
  ["fullScreen", "showBlocks", "codeView"],
  ["preview", "print"],
  ["save", "template"],
];

// @ts-ignore
// const NamedExport = dynamic(() =>
//   import("suneditor-react").then((module) => module.buttonList)
// );

// const SunEditor: React.ComponentType<any> = dynamic(
//   async () => {
//     const values = await Promise.all([
//       import("suneditor-react"), // must be first import since we are doing values[0] in return
//     ]);
//     return values[0];
//   },
//   {
//     ssr: false,
//   }
// );

// const DynamicComponent = dynamic(() =>
//   import("suneditor-react").then((mod) => mod)
// );

// const SunEditor1: React.ComponentType<any> = dynamic(
//   async () => {
//     const values = await Promise.all([
//       import("suneditor-react"), // must be first import since we are doing values[0] in return
//     ]);
//     return values[0].;
//   },
//   {
//     ssr: false,
//   }
// );

// import { buttonList } from "suneditor-react";

// const SunEditor = dynamic(() => import("suneditor-react"), {

//   ssr: false,
// });

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
              font: ["Roboto", "Arial"],
              defaultStyle: "font-family:Arial; font-Size:16px",
              height: "80vh",

              imageWidth: "50%",
              textStyles: [
                {
                  name: "Titulo H1", // Text style name
                  style: "font-Size:21px; color:#4A86E8; font-Weight: bold;", // Style query
                  tag: "span", // Style tag name (default: span)
                  _class: "", // You can control the style of the tags displayed in the menu by putting a class on the button of the menu.
                },
              ],
              paragraphStyles: [
                "spaced",
                "neon",
                {
                  name: "Custom",
                  class: "__se__customClass",
                },
              ],
              colorList: ["#000", "#4a86e8"],

              formats: [],
              templates: [
                {
                  name: "Modelo 1",
                  html: Modelo1,
                },
                {
                  name: "Modelo 2",
                  html: Modelo2,
                },
              ],

              katex: "katex",
              buttonList: buttonList,
            }}
          />
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
