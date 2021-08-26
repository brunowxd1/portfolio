import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  a {
    text-decoration: none;
  }

  nav {
    width: auto;

    ul {
      width: auto;
      list-style: none;
      display: flex;
    }

    li {
      position: relative;
      padding: 0.18rem 1rem;
      transition: all 0.4s;
      padding-bottom: 1rem;

      a {
        font-size: 1.37rem;
        color: #fff;
        letter-spacing: 2.5px;
        position: relative;
        padding-bottom: 10px;
        text-shadow: 0 0 7px #1282a2, 0 0 10px #1282a2, 0 0 21px #1282a2,
          0 0 42px #1282a2, 0 0 82px #1282a2, 0 0 92px #1282a2,
          0 0 102px #1282a2, 0 0 151px #1282a2;

        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 2px;
          background-color: var(--white);
          box-shadow: 0 0 4px #fff, 0 0 5px #1282a2, 0 0 6px #1282a2,
            0 0 7px #1282a2, 0 0 8px #1282a2;
          transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        @media (hover: hover) and (pointer: fine) {
          &:hover::before {
            left: 0;
            right: auto;
            width: 100%;
          }
        }

        &:not(:last-of-type) {
          margin-right: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    div {
      justify-content: center;
    }

    nav {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  @media (max-width: 600px) {
    div {
      padding: 0;

      a {
        margin: 0 auto;
      }
    }
  }
`;
