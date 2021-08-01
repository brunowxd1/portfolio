import { useState } from "react";
import { FiLayout, FiSettings, FiDatabase } from "react-icons/fi";

import ButtonPrimary from "../../Components/ButtonPrimary";
import {
  AboutMe,
  Container,
  FrontSection,
  Header,
  IntroductionSection,
  Main,
  Project,
  SkillsSection,
} from "./styles";

import illustration from "../../assets/illustration1.svg";
import me from "../../assets/me.jpeg";

const Landing = () => {
  const [isHoveringAboutMeImage, setIsHoveringAboutMeImage] = useState(false);

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
      <Main>
        <AboutMe>
          <h2 className="sectionHeader">About Me</h2>

          <div className="aboutme--box">
            <div className="aboutme--images">
              <img
                className={`aboutme--image1 ${
                  isHoveringAboutMeImage && "aboutme--image1-hover"
                }`}
                onMouseEnter={() => setIsHoveringAboutMeImage(true)}
                onMouseLeave={() => setIsHoveringAboutMeImage(false)}
                src={me}
                alt="Bruno Jagmin Ferreira"
              />
              <img
                className={
                  isHoveringAboutMeImage
                    ? "aboutme--hovering"
                    : "aboutme--image2"
                }
                src={me}
                alt="Bruno Jagmin Ferreira"
              />
              <img
                className={
                  isHoveringAboutMeImage
                    ? "aboutme--hovering"
                    : "aboutme--image3"
                }
                src={me}
                alt="Bruno Jagmin Ferreira"
              />
            </div>
            <div className="aboutme--text">
              <p>
                &ensp;&ensp;&ensp;&ensp;&ensp;Lorem ipsum dolor
                <span> sit amet</span>, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis <span> nostrud</span> exercitation
                ullamco laboris nisi ut aliquip ex ea commodo{" "}
                <span> consequat</span>.
                <br />
                <br />
                &ensp;&ensp;&ensp;&ensp;&ensp;Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore <span> magna aliqua</span>. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea <span> commodo</span> consequat. Duis aute irure
                dolor in dolor in <span> aliquip</span>.
              </p>
            </div>
          </div>
        </AboutMe>

        <SkillsSection>
          <h2 className="sectionHeader">My Skills</h2>
          <div className="skill--grid">
            <div className="skill--card skill--card-1">
              <FiLayout size={60} />
              <h3>Frontend</h3>
              <span>HTML 5</span>
              <span>CSS 3</span>
              <span>SASS</span>
              <span>Javascript ES6+</span>
              <span>Typescript</span>
              <span>ReactJS</span>
              <span>NextJS</span>
            </div>

            <div className="skill--card skill--card-2">
              <FiSettings size={60} />
              <h3>Backend</h3>
              <span>NodeJS</span>
              <span>Typescript</span>
              <span>API Integrations</span>
              <span>Express</span>
              <span>NestJS</span>
              <span>TypeORM</span>
              <span>Mongoose</span>
            </div>

            <div className="skill--card skill--card-3">
              <FiDatabase size={60} />
              <h3>Database</h3>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>Redis</span>
              <span>FaunaDB</span>
              <span>Firebird</span>
            </div>
          </div>
        </SkillsSection>

        <Project>
          <h2 className="sectionHeader">Projects</h2>
        </Project>
      </Main>
    </Container>
  );
};
export default Landing;
