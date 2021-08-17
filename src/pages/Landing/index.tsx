import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Zoom, Fade } from "react-awesome-reveal";
import { FiLayout, FiSettings, FiDatabase } from "react-icons/fi";

import StickyNav from "../../Components/StickyNav";
import HeaderComponent from "../../Components/Header";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";

import {
  AboutMe,
  Container,
  FrontSection,
  Main,
  ProjectSection,
  SkillsSection,
  Project,
} from "./styles";

import me from "../../assets/me.jpeg";
import utilitariosResulthMock from "../../assets/projects/utilitarios-resulth-mock.png";
import utilitariosResulthLogin from "../../assets/projects/utilitarios-resulth-login.png";
import utilitariosResulthProduto from "../../assets/projects/utilitarios-resulth-produto.png";
import utilitariosResulthReceber from "../../assets/projects/utilitarios-resulth-receber.png";
import painelEntregas from "../../assets/projects/painel-entregas.png";
import painelEntregasOrder from "../../assets/projects/painel-entregas-order.png";
import painelEntregasMessages from "../../assets/projects/painel-entregas-message.png";

const Landing = () => {
  const [isHoveringAboutMeImage, setIsHoveringAboutMeImage] = useState(false);

  return (
    <Container>
      <StickyNav />
      <FrontSection id="home">
        <HeaderComponent />
        <Hero />
      </FrontSection>
      <Main>
        <AboutMe id="about-me">
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
            <Fade triggerOnce delay={500}>
              <div className="aboutme--text">
                <p>
                  &ensp;&ensp;&ensp;&ensp;&ensp;I am a former Law School Student
                  who dropped out after 4 years of college to work with what
                  I've <span> loved</span> my entire life:{" "}
                  <span> technology</span>. As a kid, I was always curious about
                  how things work, mostly due to my early introduction to
                  computers. And so, this curiosity and drive for{" "}
                  <span> knowledge</span> just kept growing, and keeps growing
                  still.
                  <br />
                  <br />
                  &ensp;&ensp;&ensp;&ensp;&ensp;Furthermore, being so
                  <span> enthusiastic</span> about <span> tech</span>, I've been
                  learning both <span> frontend</span> and <span> backend</span>{" "}
                  software development, and I could't be <span> happier</span>{" "}
                  knowing that each and every day I'm <span> learning</span> new
                  awesome <span> technologies</span> and also becoming closer to
                  achieve my goal: become{" "}
                  <span> a great Software Engineer</span>!
                </p>
              </div>
            </Fade>
          </div>
        </AboutMe>

        <SkillsSection id="my-skills">
          <h2 className="sectionHeader">My Skills</h2>
          <div className="skill--grid">
            <Zoom delay={400} triggerOnce>
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
            </Zoom>

            <Zoom delay={600} triggerOnce>
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
            </Zoom>

            <Zoom delay={800} triggerOnce>
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
            </Zoom>
          </div>
        </SkillsSection>

        <ProjectSection id="projects">
          <h2 className="sectionHeader">Projects</h2>

          <Project>
            <Fade direction="right" triggerOnce>
              <Carousel
                navButtonsAlwaysVisible
                interval={5000}
                className="carousel--box"
              >
                <div className="carousel--div">
                  <img src={utilitariosResulthMock} alt="Utilitários Resulth" />
                </div>
                <div className="carousel--div-full">
                  <iframe
                    height="397.33"
                    width="700"
                    title="Utilitários Resulth"
                    src="https://www.youtube.com/embed/tz08hzVbaWI"
                  />
                </div>
                <div className="carousel--div-full">
                  <img
                    src={utilitariosResulthLogin}
                    alt="Utilitários Resulth - Login"
                  />
                </div>
                <div className="carousel--div-full">
                  <img
                    src={utilitariosResulthProduto}
                    alt="Utilitários Resulth - Produto"
                  />
                </div>
                <div className="carousel--div-full">
                  <img
                    src={utilitariosResulthReceber}
                    alt="Utilitários Resulth - Receber"
                  />
                </div>
              </Carousel>
              <div className="project--text">
                <h3>Ganesa Utilitarys</h3>
                <p>
                  &ensp;&ensp;&ensp;&ensp;&ensp;Local WebApp totally integrated
                  with Resulth ERP software, which contains multiple features
                  that extend as functionalities of the system, such as:
                  stock-taking through bar codes, sending e-mails to clients
                  with expired due dates, placing orders, updating product
                  entries, selecting multiple branches, user permissions, and
                  much more.
                  <br />
                  <br /> &ensp;&ensp;&ensp;&ensp;&ensp; Developed with NextJS
                  (frontend) and NodeJS with express (backend). Utilizes
                  MongoDB, Firebird and integrates with Amazon S3 for image
                  upload. Also uses tools like nodemailer, node-imap, handlebars
                  and jwt..
                  <br />
                  <br />
                </p>
              </div>
            </Fade>
          </Project>

          <Project className="inverted">
            <Fade direction="left" triggerOnce>
              <Carousel
                navButtonsAlwaysVisible
                interval={5000}
                className="carousel--box"
              >
                <div className="carousel--div-full">
                  <img src={painelEntregas} alt="Painel de Entregas" />
                </div>
                <div className="carousel--div-full">
                  <iframe
                    height="397.33"
                    width="700"
                    title="Utilitários Resulth"
                    src="https://www.youtube.com/embed/43B1DvUMMu0"
                  />
                </div>
                <div className="carousel--div-full">
                  <img
                    src={painelEntregasOrder}
                    alt="Utilitários Resulth - Mensagens"
                  />
                </div>
                <div className="carousel--div-full">
                  <img
                    src={painelEntregasMessages}
                    alt="Utilitários Resulth - Messages"
                  />
                </div>
              </Carousel>
              <div className="project--text inverted">
                <h3>Ganesa Orders Panel</h3>
                <p>
                  &ensp;&ensp;&ensp;&ensp;&ensp;Local WebApp integrated with
                  Resulth ERP software, which controls every order from Resulth
                  and possesses multiple features like: compatibility with
                  multiple purchase orders, log generation, customizable
                  messages for customer service, customizable order statuses,
                  date filters, notifications for due dates on orders, and more.
                  <br />
                  <br />
                  Developed with ReactJS (frontend) and NodeJS with express
                  (backend). Integrates with Resulth's Firebird database.
                </p>
              </div>
            </Fade>
          </Project>

          <Project className="center">
            <Fade delay={500} triggerOnce>
              <div className="project--text center-text">
                <h3>More?</h3>
                <p>
                  Please, check out my GitHub profile for more projects and open
                  source contributions. As an early career software developer, I
                  believe that contributing to Open Source projects is the best
                  way to learn, while also helping awesome projects all around
                  the world.
                </p>
              </div>
            </Fade>
          </Project>
        </ProjectSection>
        <Footer />
      </Main>
    </Container>
  );
};
export default Landing;
