import { ReactElement, ReactNode } from "react";
import { Container } from "./screen.styles";

interface ScreenProps {
  children: ReactNode;
}

export const Screen = ({ children }: ScreenProps): ReactElement => {
  const renderChildren = () => {
    return children;
  };
  return <Container>{renderChildren()}</Container>;
};
