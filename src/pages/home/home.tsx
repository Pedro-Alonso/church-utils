import { SCREENS } from "../../assets/types";
import { MainMenu } from "../../components/main-menu/main-menu";
import { MenuOption } from "../../components/menu-option/menu-option";
import { Screen } from "../../components/screen/screen";

export const Home = () => {
  return (
    <Screen>
      <MainMenu>
        <MenuOption text="Sobre" redirectTo={SCREENS.ABOUT} />
      </MainMenu>
    </Screen>
  );
};
