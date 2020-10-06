import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../Services/api";

import React, { Component } from "react";
import CKEditor from "ckeditor4-react";

const ViewQuestion = () => {
  const router = useRouter();
  const { id } = router.query;
  const [viewQuestion, setViewQuestion] = useState("");

  useEffect(() => {
    (async () => {
      const res = await api.post(`/questions/${id}/view`);

      if (res.status === 200) {
        setViewQuestion("Visualização computada com sucesso");
      } else {
        setViewQuestion("Page not found!!!");
      }
    })();
  }, []);
  return (
    <>
      <h1>{viewQuestion}</h1>
      <h4>{id}</h4>
      <CKEditor
        data="<p>Some initial data</p>"
        type="classic"
        onChange={(e, editor) => {
          console.log(editor.getData());
        }}
      />
    </>
  );
};

export default ViewQuestion;
