import { BodyHome } from "../../../styles/home/style";
import { Container } from "../../../styles/question/style_newQuestion";

import { useRouter } from "next/router";

import { useEffect } from "react";
import api from "../../../Services/api";
import Menu from "../../../components/menu";

const newQuestion = () => {
  const router = useRouter();
  const { question } = router.query;

  useEffect(() => {
    (async () => {
      const questionData = await api.delete(`/questions/${question}`);
      console.log(questionData);
      router.push("/");
    })();
  }, []);

  return (
    <div>
      <Menu />
      <BodyHome>
        <Container>Deletando dúvida!</Container>
      </BodyHome>
    </div>
  );
};

export default newQuestion;
