import {
  ImageRaduis,
  TagLink,
  TitleAPP,
  Dropdown,
  DropdownMenu,
  HeaderTOP,
} from "./style";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import {
  useFunctionsQuestion,
  useQuestion,
} from "../../context/QuestionContext";
import React, { useCallback, useEffect, useState } from "react";
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
  const [titulo, setTitulo] = useState("FAQ");
  const { functionSearch, functionMyQuestions, functionMyAnswers } =
    useFunctionsQuestion();

  const [imageUser, setImageUser] = useState("");
  const [nameUser, setNameUser] = useState("");
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

  useEffect(() => {
    setNameUser(name);
    setImageUser(urlImage);
    setTitulo(process.env.nomedosistema);
  }, []);

  return (
    <HeaderTOP>
      <GridContainer
        width={"50%"}
        col={4}
        xs={1}
        sm={1}
        md={1}
        spacing={2}
        style={{ justifyItems: "center" }}
      >
        <TitleAPP href="/">{titulo}</TitleAPP>
        <TagLink href="/">Home</TagLink>
        <TagLink href="/question/create">Nova Questão</TagLink>
        <TagLink href="/download">Downloads</TagLink>
      </GridContainer>

      <GridContainer
        width={"50%"}
        col={2}
        md={1}
        sm={1}
        xs={1}
        spacing={1}
        style={{
          justifyItems: "center",
        }}
      >
        {value.search && (
          <Container
            flex
            row
            bgColor={"#ffffff"}
            style={{
              padding: "5px",
              width: "100%",
              borderRadius: "5px",
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
              height={24}
              width={24}
              isStopped={pesquisando.stoped}
              isPaused={pesquisando.paused}
            />
          </Container>
        )}

        <DropdownMenu
          style={{
            // flex: 1,
            // width: "100%",
            // backgroundColor: "#0ae",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Dropdown>
            <Container
              style={{
                display: "flex",
                flex: 1,
                width: "150px",
                justifyContent: "center",
                alignItems: "center",
                // height: "22px",
                backgroundColor: "#ccc",
              }}
            >
              {/* <Container flex flexCenter> */}
              <a href="#">{nameUser}</a>
              {/* </Container> */}
              {/* <Container flex flexCenter spacing={0}> */}
              <ImageRaduis>
                {imageUser != "" && (
                  <img src={`http://localhost:3333/${imageUser}`} />
                )}
              </ImageRaduis>
              {/* </Container> */}
            </Container>

            <ul>
              <Dropdown>
                <RiProfileFill />
                <a href="/profile">Meu perfil</a>
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
    </HeaderTOP>
  );
};

export default Menu;
