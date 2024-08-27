import { ReactNode, ReactElement } from 'react';
import { Container } from './main-menu.styles';

interface IMainMenu {
  children: ReactNode;
}

export const MainMenu = ({ children }: IMainMenu): ReactElement => {
  const renderChildren = () => {
    return children;
  };
  return <Container>{renderChildren()}</Container>;
};
