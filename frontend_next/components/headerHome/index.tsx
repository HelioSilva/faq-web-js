import {
  Container,
  MenuInicial,
  BGTopo,
  BGImage,
  DivRow,
  Lista,
  ImageRaduis,
} from "./style";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useQuestion } from "../../context/QuestionContext";
import { useState } from "react";

const Header = () => {
  const { name, urlImage } = useAuth();
  const { functionSearch } = useQuestion();
  const [text, setText] = useState("");

  return (
    <Container>
      <BGTopo>
        <MenuInicial>
          <div>
            <h3>
              <Link href="/">FAQ</Link>
            </h3>
            <h5>
              <Link href="/">Base de Conhecimento</Link>
            </h5>
          </div>
          <DivRow>
            <Link href="/">Home</Link>
            <Link href="/download">Download</Link>
            <Lista>
              <Link href="">{name || ""}</Link>
              <div>
                <Link href={"/logout"}>Sair</Link>
              </div>
            </Lista>
            <ImageRaduis>
              <img src={urlImage} />
            </ImageRaduis>
          </DivRow>
        </MenuInicial>
      </BGTopo>
      <BGImage>
        <div>
          <input
            value={text}
            onChange={(x) => {
              setText(x.target.value);
            }}
            onKeyPress={(x) => {
              console.log(x.key);
              if (x.key === "Enter") {
                functionSearch(text);
              }
            }}
            placeholder="Pesquise aqui"
          />
        </div>
        <Link href="/question/create">Nova Questão</Link>
      </BGImage>
    </Container>
  );
};

export default Header;
