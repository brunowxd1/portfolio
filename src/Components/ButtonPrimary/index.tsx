import { Container } from "./styles";

interface ButtonPrimaryProps {
  text: string;
}

const ButtonPrimary = ({ text }: ButtonPrimaryProps) => {
  return (
    <Container>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
      <span className="accessibility" aria-hidden="false">
        {text}
      </span>
    </Container>
  );
};

export default ButtonPrimary;
