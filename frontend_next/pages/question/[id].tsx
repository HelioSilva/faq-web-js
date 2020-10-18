import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import api from "../../Services/api";

import React from "react";
import Header from "../../components/header";
import { BodyHome } from "../../styles/home/style";
import { iQuestion } from ".";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";

const ViewQuestion = () => {
  const [editorText, setEditoText] = useState(``);
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

  const onEditorStateChange = (editorState) => {
    setEditoText(editorState);
    console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <>
      <Header />
      <BodyHome>
        <Editor
          readOnly={true}
          toolbarHidden={true}
          editorState={editorText}
          toolbarClassName="hide-toolbar"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          placeholder={"Digite aqui"}
          editorStyle={{
            backgroundColor: "#dcfecd",
            padding: 0,
            borderWidth: 0,
            borderColor: "#ccc",
            height: 500,
          }}
        />
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

        <hr></hr>

        <hr></hr>

        {/* <RichText data={"<p>oidadiai</p>"} entryMap={} /> */}
      </BodyHome>
    </>
  );
};

export default ViewQuestion;
