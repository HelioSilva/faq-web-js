import Container from "../_systemUI/container";

const Footer = () => {
  return (
    <Container flex row wrap pAside={"20%"} bgColor={"#313"}>
      <Container flex bgColor={"#881919"} order={3} itemGrow={12} spacing={1}>
        <p>Teste</p>
      </Container>
      <Container flex bgColor={"#e24343"} order={3} basis={"500px"} spacing={1}>
        <p>Teste</p>
      </Container>
      <Container flex bgColor={"#38c73f"} order={1} itemGrow={5} spacing={1}>
        <p>Teste</p>
      </Container>
      <Container
        flex
        order={2}
        itemGrow={1}
        spacing={1}
        style={{ background: "#000", color: "#fff" }}
      >
        <p>Teste</p>
      </Container>
    </Container>
  );
};

export default Footer;
