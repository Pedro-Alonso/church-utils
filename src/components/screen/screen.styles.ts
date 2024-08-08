import styled from "styled-components";
import { colors } from "../../assets/themes";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.darkest};
  color: white;
`;
