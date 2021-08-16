import { Header } from "./styles";

const HeaderComponent = () => {
  return (
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
              <a href="#about-me">aboutMe()</a>
            </li>
            <li>
              <a href="#my-skills">mySkills()</a>
            </li>
            <li>
              <a href="#projects">projects()</a>
            </li>
          </ul>
        </nav>
      </div>
    </Header>
  );
};

export default HeaderComponent;
