import Footer from "../../components/footer";
import Header from "../../components/headerHome/index";
import ItemQuestion from "../../components/itemQuestion";
import Container from "../../components/_systemUI/container";
import { useQuestion } from "../../context/QuestionContext";
import { BodyHome } from "../../styles/home/style";

const Home = () => {
  const { questions, roadmap, amountQuestions } = useQuestion();

  return (
    <div>
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

        {questions.length > 0 ? (
          questions.map((itemDetail) => (
            <ItemQuestion
              id={itemDetail.id}
              key={itemDetail.id}
              titulo={itemDetail.titulo}
              autor={itemDetail.createdAt}
              autor_id={itemDetail.autor_id}
              qtdRespostas={itemDetail.answers.length}
              qtdAcesso={itemDetail.acessos}
              url={`/question/${itemDetail.id}/`}
            />
          ))
        ) : (
          <Container flex col flexCenter>
            <img
              src={"/blog.svg"}
              style={{ height: 300, width: 300 }}
              alt="website logo"
            />
            <h5 style={{ color: "#ccc" }}>Nenhuma questão encontrada</h5>
          </Container>
        )}
      </BodyHome>
      <Footer />
    </div>
  );
};

export default Home;
