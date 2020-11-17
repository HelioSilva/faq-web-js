import React from "react";
import ButtonGmail from "../buttons/ButtonGmail";
import ImgButton from "../buttons/ImgButton";

function WrapperGmail({ src, alt, cont }) {
  return (
    <a href="/">
      <ButtonGmail>
        <ImgButton src={src} alt={alt} />
        <p>{cont}</p>
      </ButtonGmail>
    </a>
  );
}

export default WrapperGmail;
