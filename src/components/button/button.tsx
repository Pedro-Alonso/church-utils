import { ReactElement } from "react";
import { Container, Paragraph } from "./button.styles";
import { ButtonVariants } from "./types";

interface ButtonProps {
  type: ButtonVariants;
  text: string;
  onClick: () => void;
}

export const Button = ({ type, text, onClick }: ButtonProps): ReactElement => {
  return (
    <Container type={type} onClick={onClick}>
      <Paragraph type={type}>{text}</Paragraph>
    </Container>
  );
};
