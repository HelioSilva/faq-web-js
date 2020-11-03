import Header from "../../../components/header/index";
import { BodyHome } from "../../../styles/home/style";
import { Container } from "../../../styles/question/style_newQuestion";

import { Form } from "@unform/web";
import Input from "../../../components/input/index";
import Link from "next/link";
import Router, { useRouter } from "next/router";

import { useEffect, useState } from "react";
import Btn from "../../../components/button";
import api from "../../../Services/api";
import { useAuth } from "../../../context/AuthContext";

const newQuestion = () => {
  const router = useRouter();
  const { question } = router.query;

  useEffect(() => {
    (async () => {
      const questionData = await api.delete(`/questions/${question}`);
      router.push("/");
    })();
  }, []);
  return (
    <div>
      <Header />
      <BodyHome>
        <Container>Deletando dúvida!</Container>
      </BodyHome>
    </div>
  );
};

export default newQuestion;
