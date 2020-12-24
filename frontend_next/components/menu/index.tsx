import {
  ImageRaduis,
  TagLink,
  TitleAPP,
  Dropdown,
  DropdownMenu,
} from "./style";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import {
  useFunctionsQuestion,
  useQuestion,
} from "../../context/QuestionContext";
import React, { useCallback, useState } from "react";
import Lottie from "react-lottie";
import animationData from "./search.json";

import Container from "../_systemUI/container";
import GridContainer from "../_systemUI/gridContainer";
import { IoMdExit } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { RiProfileFill } from "react-icons/ri";
import { FcAnswers } from "react-icons/fc";
import { useRouter } from "next/router";

type TypeMenu = {
  search?: Boolean;
};

const Menu = (value: TypeMenu) => {
  const router = useRouter();
  const { name, urlImage, id } = useAuth();
  const {
    functionSearch,
    functionMyQuestions,
    functionMyAnswers,
  } = useFunctionsQuestion();
  const [text, setText] = useState("");
  const [pesquisando, setPesquisando] = useState({
    stoped: true,
    paused: false,
  });

  const handleMyQuestions = useCallback(async () => {
    await functionMyQuestions(id);
    router.push("/");
  }, [id, functionMyQuestions]);

  const handleMyAnswers = useCallback(async () => {
    await functionMyAnswers(id);
    router.push("/");
  }, [id, functionMyAnswers]);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container
      bgColor={"#C20B2E"}
      width={"100%"}
      padding={1}
      height={"60px"}
      flex
      between
    >
      <GridContainer col={4} spacing={2}>
        <TitleAPP>FAQ-Base de Conhecimento</TitleAPP>
        <TagLink href="/">Home</TagLink>
        <TagLink href="/question/create">Nova Questão</TagLink>
        <TagLink href="/download">Download</TagLink>
      </GridContainer>

      <GridContainer
        col={2}
        spacing={1}
        style={{ alignSelf: "center", alignItems: "center" }}
      >
        {value.search && (
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
        )}

        <DropdownMenu>
          <Dropdown>
            <GridContainer
              col={2}
              spacing={0}
              style={{ minWidth: "125px", lineHeight: "2em" }}
            >
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
                <a
                  onClick={() => {
                    handleMyQuestions();
                  }}
                >
                  Minhas questões
                </a>
              </Dropdown>
              <Dropdown>
                <FcAnswers />
                <a
                  onClick={() => {
                    handleMyAnswers();
                  }}
                >
                  Minhas respostas
                </a>
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
  );
};

export default Menu;
