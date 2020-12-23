import { BGImage } from "./style";
import Link from "next/link";

import React from "react";

import Container from "../_systemUI/container";

import Menu from "../menu";

const Header = () => {
  return (
    <Container>
      <Menu search />

      <BGImage>
        <Link href="/question/create">Nova Questão</Link>
      </BGImage>
    </Container>
  );
};

export default Header;
