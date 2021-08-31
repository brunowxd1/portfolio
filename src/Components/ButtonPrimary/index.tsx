import { Container } from "./styles";

interface ButtonPrimaryProps {
  text: string;
  href: string;
}

const ButtonPrimary = ({ text, href }: ButtonPrimaryProps) => {
  return (
    <Container href={href}>
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
