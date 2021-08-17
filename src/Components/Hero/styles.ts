import styled from "styled-components";

export const Container = styled.div`
  color: var(--white);
  width: 80%;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  object {
    width: 40%;
    animation: flickerBorder 4s infinite alternate;
    border-radius: 50%;
    padding: 0.75rem 1rem 1rem 0.75rem;
  }

  .introduction--title {
    span {
      font-size: 30px;
      letter-spacing: 2px;
    }

    h1 {
      font-size: 100px;
      letter-spacing: 4px;
      font-weight: 300;
      padding: 1rem 0;
      display: flex;
      align-items: center;

      strong {
        color: var(--white);
        margin-right: 1rem;

        text-shadow: 0 0 7px #1282a2, 0 0 10px #1282a2, 0 0 21px #1282a2,
          0 0 42px #1282a2, 0 0 82px #1282a2, 0 0 92px #1282a2,
          0 0 102px #1282a2, 0 0 151px #1282a2;
      }

      span {
        animation: flicker 2s infinite alternate;
      }
    }

    p {
      max-width: 650px;
      line-height: 2.62rem;
      font-size: 1.12rem;
    }
  }

  .introduction--buttons {
    display: flex;
    margin-top: 2.25rem;
  }
`;
