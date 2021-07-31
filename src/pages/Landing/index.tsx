import ButtonPrimary from "../../Components/ButtonPrimary";
import {
  AboutMe,
  Container,
  FrontSection,
  Header,
  IntroductionSection,
} from "./styles";

import illustration from "../../assets/illustration1.svg";

const Landing = () => {
  return (
    <Container>
      <FrontSection>
        <Header>
          <div>
            <a className="header--logo" href="/">
              <h1>
                <span className="header--logo-outter">&lt; </span>
                <span>BJF</span>
                <span className="header--logo-outter">/ &gt;</span>
              </h1>
            </a>
            <nav>
              <ul>
                <li>
                  <a href="/">aboutMe()</a>
                </li>
                <li>
                  <a href="/">mySkills()</a>
                </li>
                <li>
                  <a href="/">projects()</a>
                </li>
              </ul>
            </nav>
          </div>
        </Header>

        <IntroductionSection>
          <div className="introduction--box">
            <div className="introduction--title">
              <span>Hey there! 👋</span>
              <h1>
                I'm,&nbsp;<strong>Bruno</strong> <span>;&#41;</span>
              </h1>
              <p>
                I'm really glad that you're here! So... I am a FullStack
                Developer and passionte for every kind of tech. Please, take
                your time to check on my projects. Oh, and also feel free to
                contact me. See you soon!
              </p>
            </div>
            <div className="introduction--buttons">
              <ButtonPrimary text="Contact Me!" />
              <ButtonPrimary text="See my Projects" />
            </div>
          </div>
          <object type="image/svg+xml" data={illustration}>
            Logo
          </object>
        </IntroductionSection>
      </FrontSection>
      <AboutMe>
        <h2 className="sectionHeader">About Me</h2>
      </AboutMe>
    </Container>
  );
};

export default Landing;
