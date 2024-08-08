import styled from "styled-components";
import { colors } from "../../assets/themes";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #0f2027; 
  background: -webkit-linear-gradient(
    150deg,
    #2c5364,
    ${colors.darkest},
    #0f2027
  );
  background: linear-gradient(
    150deg,
    #2c5364,
    ${colors.darkest},
    #0f2027
  );
  color: white;
`;
