import styled from "styled-components";

export const Container = styled.a`
  position: relative;
  display: inline-block;
  padding: 1rem 2rem;
  color: var(--white);
  box-shadow: 0 0px 0px 1px #1282a2, 0 0px 0px 1px #1282a2;
  border-radius: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: 1.25rem;
  overflow: hidden;
  transition: 0.2s;
  text-decoration: none;
  cursor: pointer;

  &:not(:first-of-type) {
    margin-left: 2rem;
  }

  &:hover {
    color: var(--white);
    background: var(--quaternary);
    box-shadow: 0 0 10px var(--quaternary), 0 0 40px var(--quaternary),
      0 0 80px var(--quaternary);
    transition-delay: 1s;
  }

  & span {
    position: absolute;
    display: block;
  }

  & span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--white));
  }

  &:hover span:nth-child(1) {
    left: 100%;
    transition: 1s;
  }

  & span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, var(--white));
  }

  &:hover span:nth-child(3) {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }

  & span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--white));
  }

  &:hover span:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }

  & span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, var(--white));
  }

  &:hover span:nth-child(4) {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    &:not(:first-of-type) {
      margin-left: 0;
      margin-top: 2rem;
    }
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;
