import React from "react";
import { Container, BGTopo, MenuInicial, DivRow, BGImage } from "./style";

const Header = () => (
  <Container>
    <BGTopo>
      <MenuInicial>
        <div>
          <h3>FAQ</h3>
          <h5>Base de conhecimento</h5>
        </div>
        <DivRow>
          <a href="/download">Downloads</a>
          <a href="">Ronald SS</a>
          <div>
            <p>RD</p>
          </div>
        </DivRow>
      </MenuInicial>
    </BGTopo>
    <BGImage>
      <div>
        <input placeholder="Pesquise aqui" />
      </div>
      <a href="http://debian.org">Nova Questão</a>
    </BGImage>
  </Container>
);
export default Header;
