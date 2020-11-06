import React from "react";
import { BGTopo, MenuInicial, DivRow } from "./style";
import ImgUser from "../ImgUser";


function Topo(){
  return(
    <BGTopo>
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
  </BGTopo>
  )
};

export default Topo;
