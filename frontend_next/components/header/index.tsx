import {
  Container,
  MenuInicial,
  BGTopo,
  BGImage,
  DivRow,
  Lista,
  ImageRaduis,
} from "./style";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { name, urlImage, signOut } = useAuth();

  return (
    <Container>
      <BGTopo>
        <MenuInicial>
          <div>
            <h3>FAQ</h3>
            <h5>Base Conhecimento</h5>
          </div>
          <DivRow>
            <Link href="/">Home</Link>
            <Link href="/download">Download</Link>
            <Lista>
              <Link href="">{name}</Link>
              <div>
                <Link href={"/logout"}>Sair</Link>
              </div>
            </Lista>
            <ImageRaduis>
              <img src={urlImage} />
            </ImageRaduis>
          </DivRow>
        </MenuInicial>
      </BGTopo>
      <BGImage>
        <div>
          <input placeholder="Pesquise aqui" />
        </div>
        <Link href="http:\\google.com.br">Nova Questão</Link>
      </BGImage>
    </Container>
  );
};

export default Header;
