import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-padding-start: 0px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    @media (max-width: 600px) {
      overflow-x: hidden;
    }
  }

  @media(max-width: 1800px) {
    html {
        font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
        font-size: 87.5%;
    }
  }


  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary: #0A1128;
    --secondary: #001F54;
    --tertiary: #034078;
    --quaternary: #1282A2;
    --white:#FEFCFB;
  }

  .header--logo {
    border: none;
    font-family: "Zen Tokyo Zoo", cursive;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 25px;
    text-decoration: none;

    animation: flicker 3s infinite alternate;
  }

  .header--logo-outter {
    font-size: 60px;
    margin: auto 0;
  }

  .sectionHeader {
    width: fit-content;
    padding: 16px 100px;
    margin: 0 auto 6rem auto;
    color: var(--white);
    font-size: 36px;
    text-transform: uppercase;
    font-family: "Zen Tokyo Zoo", cursive;

    &::after {
      content: "";
      position: relative;
      display: block;
      height: 8px;
      width: 40%;
      margin: 0 auto;
      margin-top: 6px;
      box-shadow: 0 4px 2px -2px #fff, 0 6px 2px -2px #1282a2;
      z-index: 20;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--primary);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--quaternary);
    border-radius: 12px;
  }

    @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 7px #1282a2, 0 0 10px #1282a2, 0 0 21px #1282a2,
        0 0 42px #1282a2, 0 0 82px #1282a2, 0 0 92px #1282a2, 0 0 102px #1282a2,
        0 0 151px #1282a2;
    }
    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }

  @keyframes flickerBorder {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff,
        0 0 5px #1282a2, 0 0 6px #1282a2, 0 0 7px #1282a2, 0 0 8px #1282a2;
    }
    20%,
    24%,
    55% {
      box-shadow: none;
    }
  }

  @media(max-width: 768px) {
    .header--logo {
      font-size: 2.5rem;
    }

    .header--logo-outter {
      font-size: 5rem;
    }
  }


  @media(max-width: 600px) {
    &::-webkit-scrollbar {
      width: 2px;
    }
  }

`;
