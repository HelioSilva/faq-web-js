import React from "react";
import { Container } from "./style";

const Button = ({ ...props }) => (
  <>
    <Container>
      <p>{props.name}</p>
    </Container>
  </>
);

export default Button;
