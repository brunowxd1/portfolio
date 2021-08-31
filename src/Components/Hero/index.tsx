import ButtonPrimary from "../ButtonPrimary";

import { Container } from "./styles";

import illustration from "../../assets/illustration1.svg";

const Hero = () => {
  return (
    <Container>
      <div className="introduction--box">
        <div className="introduction--title">
          <span>Hey there! 👋</span>
          <h1>
            I'm,&nbsp;<strong>Bruno</strong> <span>;&#41;</span>
          </h1>
          <p>
            I'm really glad that you're here! So... I am a FullStack Developer
            and passionte for every kind of tech. Please, take your time to
            check on my projects. Oh, and also feel free to contact me. See you
            soon!
          </p>
        </div>
        <div className="introduction--buttons">
          <ButtonPrimary
            text="Contact Me!"
            href="mail:brunojagminferreira@gmail.com"
          />
          <ButtonPrimary text="See my Projects" href="#projects" />
        </div>
      </div>
      <object type="image/svg+xml" data={illustration}>
        Logo
      </object>
    </Container>
  );
};

export default Hero;
