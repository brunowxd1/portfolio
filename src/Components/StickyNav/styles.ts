import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 50%;
  padding: 0 0.5rem;
  z-index: 99999;

  box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff,
    0 0 5px #1282a2, 0 0 6px #1282a2, 0 0 7px #1282a2, 0 0 8px #1282a2;

  ul {
    list-style: none;
  }

  svg {
    transition: all 0.3s;
    color: rgba(254, 252, 251, 0.8);
    filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 6px #1282a2)
      drop-shadow(0 0 10px #1282a2) drop-shadow(0 0 12px #1282a2);
  }

  a {
    &:hover {
      svg {
        transform: scale(1.1);
      }
    }
  }

  li {
    padding: 0.5rem 0;
  }

  @media (max-width: 600px) {
    padding: 0 0.1rem;
    height: 2.7rem;
    top: calc(100% - 2.7rem);
    left: 25%;

    svg {
      width: 1.56rem;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 50vw;

      li {
        padding: 0.1rem 0;
      }
    }
  }
`;
