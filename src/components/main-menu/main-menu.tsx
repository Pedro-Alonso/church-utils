import { ReactNode, ReactElement } from "react";
import { Container } from "./main-menu.styles";

interface MainMenuProps {
    children: ReactNode;
    }

export const MainMenu = ({children}:MainMenuProps):ReactElement => {
    const renderChildren = () => {
        return children;
    };
    return <Container>{renderChildren()}</Container>;
}