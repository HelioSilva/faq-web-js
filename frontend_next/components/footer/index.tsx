import Container from "../_systemUI/container";

const Footer = () => {
  return (
    <Container flex row pAside={"20%"} bgColor={"#313"}>
      <Container flex bgColor={"#881919"} order={3} spacing={1}>
        <p>Teste</p>
      </Container>
      <Container flex bgColor={"#e24343"} order={3} spacing={1}>
        <p>Teste</p>
      </Container>
      <Container flex bgColor={"#38c73f"} order={1} basis={"250px"} spacing={1}>
        <p>Teste</p>
      </Container>
      <Container flex bgColor={"#783681"} order={2} spacing={1}>
        <p>Teste</p>
      </Container>
    </Container>
  );
};

export default Footer;
