import Footer from "../../components/footer";
import Header from "../../components/headerHome/index";
import { useQuestion } from "../../context/QuestionContext";
import { BodyHome } from "../../styles/home/style";

import dynamic from "next/dynamic";

const PatternItemQuestion = dynamic(
  () => import("../../pattern/ItemQuestionsMAP")
);

const Home = () => {
  const { questions, roadmap, amountQuestions } = useQuestion();

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
