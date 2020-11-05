import React from "react";
import { DivRow, MenuInicial } from "../header/style";
import ImgUser from "../ImgUser";

function BGTopo() {
  return (
    <MenuInicial>
      <div>
        <h3>FAQ</h3>
        <h5>Base de conhecimento</h5>
      </div>
      <DivRow>
        <a href="/download">Download</a>
        <a href="">Ronald SS</a>
        <div>
          <ImgUser />
        </div>
      </DivRow>
    </MenuInicial>
  );
}

export default BGTopo;
