import {
  ImageRaduis,
  TagLink,
  TitleAPP,
  Dropdown,
  DropdownMenu,
  HeaderTOP,
  HeaderTopRigth,
  BaseFLEX,
  HeaderTopLeft,
} from "./style";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useFunctionsQuestion } from "../../context/QuestionContext";
import React, { useCallback, useEffect, useState } from "react";
import animationData from "./search.json";

import Container from "../_systemUI/container";
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
      <HeaderTopLeft
        style={{
          width: "50%",
        }}
      >
        <TitleAPP href="/">{titulo}</TitleAPP>
        <TagLink href="/">Home</TagLink>
        <TagLink href="/question/create">Nova Questão</TagLink>
        <TagLink href="/download">Downloads</TagLink>
      </HeaderTopLeft>

      <HeaderTopRigth
        style={{
          width: "50%",
          justifyContent: "flex-end",
        }}
      >
        <div>
          {value.search && (
            <Container
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                minWidth: "300px",
              }}
            >
              <Container
                bgColor={"#ffffff"}
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "5px",
                  padding: 8,
                }}
              >
                <input
                  style={{
                    flex: 1,
                    border: "0px",
                    fontSize: "0.9rem",
                    color: "#858383",
                  }}
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
                {/* <Lottie
                  options={defaultOptions}
                  height={24}
                  width={24}
                  isStopped={pesquisando.stoped}
                  isPaused={pesquisando.paused}
                /> */}
              </Container>
            </Container>
          )}
        </div>
        <div>
          <DropdownMenu>
            <Dropdown>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ImageRaduis
                  style={{ width: "40px", height: "30px", marginRight: 5 }}
                >
                  {imageUser != "" && (
                    <img src={urlImage ? urlImage : "/user.png"} />
                  )}
                </ImageRaduis>
                <a href="#">{nameUser}</a>
              </div>

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
        </div>
      </HeaderTopRigth>
    </HeaderTOP>
  );
};

export default Menu;
