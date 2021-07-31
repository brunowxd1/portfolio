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
    </Container>
  );
};

export default ButtonPrimary;
