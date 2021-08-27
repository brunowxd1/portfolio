import { Container } from "./styles";

const LoadingComponent = () => {
  return (
    <Container>
      <div className="logo--div">
        <h1 className="header--logo">
          <span className="header--logo-outter">&lt; </span>
          <span>BJF</span>
          <span className="header--logo-outter">/ &gt;</span>
        </h1>
      </div>
    </Container>
  );
};

export default LoadingComponent;
