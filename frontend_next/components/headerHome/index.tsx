import {
  BGTopo,
  BGImage,
  Lista,
  ImageRaduis,
  TagLink,
  TitleAPP,
} from "./style";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useQuestion } from "../../context/QuestionContext";
import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./search.json";

import Container from "../_systemUI/container";

import GridContainer from "../_systemUI/gridContainer";

const Header = () => {
  const { name, urlImage } = useAuth();
  const { functionSearch } = useQuestion();
  const [text, setText] = useState("");
  const [pesquisando, setPesquisando] = useState({
    stoped: true,
    paused: false,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <BGTopo>
        <Container width={"100%"} height={"56px"} flex between>
          <GridContainer col={3} spacing={2}>
            <TitleAPP>FAQ - Base de Conhecimento</TitleAPP>
            <TagLink href="/">Home</TagLink>
            <TagLink href="/download">Download</TagLink>
          </GridContainer>

          <GridContainer col={2} spacing={1}>
            <Lista>
              <Link href="">{name || ""}</Link>
              <div>
                <Link href={"/logout"}>Sair</Link>
              </div>
            </Lista>
            <ImageRaduis>
              <img src={urlImage} />
            </ImageRaduis>
          </GridContainer>
        </Container>
      </BGTopo>
      <BGImage>
        <Container
          flex
          row
          bgColor={"#fff"}
          style={{
            padding: "5px",
            width: "600px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <input
            value={text}
            onChange={(x) => {
              setText(x.target.value);
            }}
            onKeyPress={async (x) => {
              if (x.key === "Enter") {
                setPesquisando({ ...pesquisando, stoped: !pesquisando.stoped });
                await functionSearch(text);
              }
            }}
            placeholder="Pesquise aqui e tecle ENTER"
          />
          <Lottie
            options={defaultOptions}
            height={35}
            width={35}
            isStopped={pesquisando.stoped}
            isPaused={pesquisando.paused}
          />
        </Container>
        <Link href="/question/create">Nova Questão</Link>
      </BGImage>
    </Container>
  );
};

export default Header;
