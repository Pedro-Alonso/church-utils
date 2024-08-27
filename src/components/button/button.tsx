import { ReactElement } from 'react';
import { Container, Paragraph } from './button.styles';

interface IButton {
  variant: ButtonVariants;
  text: string;
  onClick: () => void;
}

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export const Button = ({ variant, text, onClick }: IButton): ReactElement => {
  return (
    <Container variant={variant} onClick={onClick}>
      <Paragraph variant={variant}>{text}</Paragraph>
    </Container>
  );
};
