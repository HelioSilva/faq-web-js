import { Container, MenuInicial, BGTopo, BGImage, DivRow } from "./style";
import Link from "next/link";

const Header = () => (
  <Container>
    <BGTopo>
      <MenuInicial>
        <div>
          <h3>FAQ</h3>
          <h5>Base Conhecimento</h5>
        </div>
        <DivRow>
          <Link href="/download">Downloads</Link>
          <Link href="">J. Alexandre</Link>
          <div>
            <p>JA</p>
          </div>
        </DivRow>
      </MenuInicial>
    </BGTopo>
    <BGImage>
      <div>
        <input placeholder="Pesquise aqui" />
      </div>
      <Link href="http:\\google.com.br">Nova Questão</Link>
    </BGImage>
  </Container>
);

export default Header;
