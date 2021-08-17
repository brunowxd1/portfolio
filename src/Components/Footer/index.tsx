import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <a className="header--logo" href="#home">
        <h1>
          <span className="header--logo-outter">&lt; </span>
          <span>BJF</span>
          <span className="header--logo-outter">/ &gt;</span>
        </h1>
      </a>
    </Container>
  );
};

export default Footer;
