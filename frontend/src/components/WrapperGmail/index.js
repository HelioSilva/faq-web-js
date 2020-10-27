import React from "react";
import ButtonGmail from "../buttons/ButtonGmail";
import ImgButton from "../buttons/ImgButton";

function WrapperGmail({ src, alt }) {
  return (
    <ButtonGmail>
      <ImgButton src={src} alt={alt} />
      Entrar com Gmail
    </ButtonGmail>
  );
}

export default WrapperGmail;
