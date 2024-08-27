import { ReactElement, ReactNode } from 'react';
import { Container } from './screen.styles';

interface IScreen {
  children: ReactNode;
}

export const Screen = ({ children }: IScreen): ReactElement => {
  const renderChildren = () => {
    return children;
  };
  return <Container>{renderChildren()}</Container>;
};
