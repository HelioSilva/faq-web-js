import { Container, MenuInicial, BGTopo, BGImage, DivRow } from "./style";

const Header = () => (
  <Container>
    <BGTopo>
      <MenuInicial>
        <div>
          <h3>FAQ</h3>
          <h5>Base Conhecimento</h5>
        </div>
        <DivRow>
          <p>Downloads</p>
          <p>J. Alexandre</p>
        </DivRow>
      </MenuInicial>
    </BGTopo>
    <BGImage>ds</BGImage>
  </Container>
);

export default Header;
