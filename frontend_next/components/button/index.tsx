import { Container } from "./style";

interface props {
  width: string;
  value: string;
  primary?: Boolean;
  onClick?: () => {};
}

const Btn = (data: props) => {
  return (
    <Container
      onClick={data.onClick}
      type="submit"
      primary={data.primary}
      atrib={{ tamanho: data.width }}
    >
      {data.value}
    </Container>
  );
};

export default Btn;
