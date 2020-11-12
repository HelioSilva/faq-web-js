import React from "react";
import { Container, BGImage } from "./style";
import Topo from '../Topo/index';
import ButtonFaq from "../buttons";

const Header = () => (
  <>
    <Container>
      <Topo />
      <BGImage>
        <div>
          <input placeholder="Pesquise aqui" />
        </div>
        <ButtonFaq>
          Nova Questão
        </ButtonFaq>
      </BGImage>
    </Container>
    <br />
  </>
);
export default Header;
