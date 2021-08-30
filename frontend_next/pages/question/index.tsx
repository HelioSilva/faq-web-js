import Footer from "../../components/footer";
import Header from "../../components/headerHome/index";
import { useQuestion } from "../../context/QuestionContext";
import { BodyHome } from "../../styles/home/style";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Box } from "@material-ui/core";

const PatternItemQuestion = dynamic(
  () => import("../../pattern/ItemQuestionsMAP"),
  {
    loading: () => (
      <Box flex justifyContent="center" alignItems="center">
        <p>Carregando!</p>
      </Box>
    ),
  }
);

const Home = () => {
  useEffect(() => {
    console.log("reRender");
  });
  const { roadmap, amountQuestions } = useQuestion();

  return (
    <main>
      <Header />
      <BodyHome>
        <h4
          style={{
            margin: "2px 0px",
            color: "#535151",
            fontWeight: 700,
            textRendering: "optimizeLegibility",
            fontSize: "1.1em",

            overflowWrap: "break-word",
          }}
        >
          {roadmap}
        </h4>
        <p
          style={{
            paddingBottom: "18px",
            color: "#9b9b9b",
            fontSize: "0.9em",
            fontWeight: 400,
            overflowWrap: "break-word",
          }}
        >
          {amountQuestions} artigos encontrados
        </p>

        <PatternItemQuestion />
      </BodyHome>
      <Footer />
    </main>
  );
};

export default Home;
