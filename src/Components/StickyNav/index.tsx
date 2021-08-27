import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { Container } from "./styles";

const StickyNav = () => {
  return (
    <Container>
      <ul>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/bruno-jagmin-ferreira-968018170/"
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin size={35} />
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/brunowxd1"
            aria-label="Github"
          >
            <AiOutlineGithub size={35} />
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/bjagmin/"
            aria-label="Instagram"
          >
            <AiOutlineInstagram size={35} />
          </a>
        </li>
        <a href="mailto:brunojagminferreira@gmail.com" aria-label="E-mail">
          <AiOutlineMail size={35} />
        </a>
      </ul>
    </Container>
  );
};

export default StickyNav;
