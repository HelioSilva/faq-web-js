import Container from "../_systemUI/container";
import GridContainer from "../_systemUI/gridContainer";

const Footer = () => {
  return (
    <GridContainer
      col={3}
      spacing={2}
      style={{
        height: "32vh",
        background: "#313131",
        padding: "10px",
      }}
    >
      <Container flex col flexCenter>
        <h3>Desenvolvedores</h3>
        <p>Helio Silva</p>
        <p>Ronald Santos</p>
      </Container>
      <Container flex col flexCenter>
        <h3>Projeto Open Source</h3>
        <p>Projeto com código livre no Github</p>
      </Container>
      <Container flex col flexCenter>
        <h3>Redes sociais</h3>
        <p>Linkedin, Github, Instagran e outros</p>
      </Container>
    </GridContainer>
  );
};

export default Footer;
