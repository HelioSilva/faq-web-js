import { Container } from "./style";

interface props {
  width: string;
  value: string;
  primary?: Boolean;
}

const Btn = (data: props) => {
  return (
    <Container
      type="submit"
      primary={data.primary}
      atrib={{ tamanho: data.width }}
    >
      {data.value}
    </Container>
  );
};

export default Btn;
