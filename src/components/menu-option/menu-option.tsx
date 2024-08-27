import { ReactElement } from 'react';
import { Container, Paragraph } from './menu-option.styles';
import { SCREENS } from '../../assets/types';
import { useNavigate } from 'react-router-dom';

interface IMenuOption {
  text: string;
  redirectTo: SCREENS;
}

export const MenuOption = ({ text, redirectTo }: IMenuOption): ReactElement => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(redirectTo);
  };

  return (
    <Container onClick={onClick}>
      <Paragraph>{text}</Paragraph>
    </Container>
  );
};
