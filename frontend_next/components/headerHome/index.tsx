import {
  BGTopo,
  BGImage,
  ImageRaduis,
  TagLink,
  TitleAPP,
  Dropdown,
  DropdownMenu,
} from "./style";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useQuestion } from "../../context/QuestionContext";
import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./search.json";
import Container from "../_systemUI/container";
import GridContainer from "../_systemUI/gridContainer";
import { IoMdExit } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { RiProfileFill } from "react-icons/ri";
import { FcAnswers } from "react-icons/fc";

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
        <Container width={"100%"} height={"48px"} flex between>
          <GridContainer col={3} spacing={2}>
            <TitleAPP>FAQ-Base de Conhecimento</TitleAPP>
            <TagLink href="/">Home</TagLink>
            <TagLink href="/download">Download</TagLink>
          </GridContainer>

          <GridContainer
            col={2}
            spacing={1}
            style={{ alignSelf: "center", alignItems: "center" }}
          >
            <Container
              flex
              row
              bgColor={"#ffffff"}
              style={{
                padding: "5px",
                width: "350px",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              <input
                style={{ flex: 1, border: "0px", fontSize: "0.9rem" }}
                value={text}
                onChange={(x) => {
                  setText(x.target.value);
                }}
                onKeyPress={async (x) => {
                  if (x.key === "Enter") {
                    setPesquisando({
                      ...pesquisando,
                      stoped: !pesquisando.stoped,
                    });
                    await functionSearch(text);
                  }
                }}
                placeholder="Pesquise sua dúvida"
              />
              <Lottie
                options={defaultOptions}
                height={35}
                width={35}
                isStopped={pesquisando.stoped}
                isPaused={pesquisando.paused}
              />
            </Container>
            <DropdownMenu>
              <Dropdown>
                <GridContainer col={2} spacing={1}>
                  <>
                    <a href="#">{name && name}</a>
                  </>

                  <>
                    <ImageRaduis>
                      <img src={urlImage} />
                    </ImageRaduis>
                  </>
                </GridContainer>

                <ul>
                  <Dropdown>
                    <RiProfileFill />
                    <a href="#">Meu perfil</a>
                  </Dropdown>
                  <Dropdown>
                    <BsFillQuestionCircleFill />
                    <a href="#">Minhas questões</a>
                  </Dropdown>
                  <Dropdown>
                    <FcAnswers />
                    <a href="#">Minhas respostas</a>
                  </Dropdown>
                  <Dropdown>
                    <IoMdExit />
                    <Link href={"/logout"}>Sair</Link>
                  </Dropdown>
                </ul>
              </Dropdown>
            </DropdownMenu>
          </GridContainer>
        </Container>
      </BGTopo>
      <BGImage>
        <Link href="/question/create">Nova Questão</Link>
      </BGImage>
    </Container>
  );
};

export default Header;
