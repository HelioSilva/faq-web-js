import Container from "../_systemUI/container";
import Lottie from "react-lottie";
import animationData from "./loading.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container
      flex
      bgColor={"#c20b2e"}
      height={"100vh"}
      col
      flexCenter
      style={{ color: "#ccc", alignSelf: "center" }}
    >
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={true}
        isPaused={false}
      />
      <div>
        <p>Carregando dados...</p>
      </div>
    </Container>
  );
};

export default Loading;
