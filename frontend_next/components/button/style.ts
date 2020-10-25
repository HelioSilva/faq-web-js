import styled from "styled-components";

interface props {
  atrib: { tamanho: string };
  primary?: Boolean;
}

const corPrimary = "#9D0926";
const corSecundary = "#fff";

export const Container = styled.button<props>`
  color: ${(props) => (props.primary ? corSecundary : corPrimary)};
  background: ${(props) => (props.primary ? corPrimary : corSecundary)};
  border: 1px solid ${(props) => (props.primary ? corSecundary : corPrimary)};
  padding: 5px;
  border-radius: 10px;
  transition: 0.5s;
  height: 40px;
  min-width: ${(props) => props.atrib.tamanho};
  :hover {
    background: ${(props) => (props.primary ? corSecundary : corPrimary)};
    color: ${(props) => (props.primary ? corPrimary : corSecundary)};
    border: 1px solid ${(props) => (props.primary ? corPrimary : corSecundary)};
  }
`;
