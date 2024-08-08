import styled from "styled-components";
import { colors } from "../../assets/themes";

export const Container = styled.div`
  width: 30rem;
  height: 37.5rem;
  padding: 4rem 0 4rem 0;
  background-color: ${colors.lightest};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
