import dynamic from "next/dynamic";
import Container from "../_systemUI/container";

const DynamicComponent = dynamic(() => import("./lottie"));

const Loading = () => {
  return (
    <Container
      flex
      bgColor={"#c20b2e"}
      height={"100vh"}
      col
      flexCenter
      style={{ color: "#ccc", alignSelf: "center" }}
    >
      <div>
        <DynamicComponent />
        <p>Carregando dados...</p>
      </div>
    </Container>
  );
};

export default Loading;
