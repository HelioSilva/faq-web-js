import React from "react";
import FormAnswer, { Tipo } from "../../../../components/formAnswer/create";

const View = () => {
  return <FormAnswer mode={Tipo.CREATE} />;
};

export default View;
