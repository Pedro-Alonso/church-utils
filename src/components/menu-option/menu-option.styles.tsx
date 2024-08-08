import styled from "styled-components";
import { colors } from "../../assets/themes";

export const Container = styled.div`
  width: 80%;
  height: 3rem;
  background-color: ${colors.lightest};
  box-shadow: 0 0 0.5rem 0.1rem ${colors.darkest};
  border-radius: 0.5rem;
  display: flex;
  cursor: pointer;

    &:hover {
        background-color: ${colors.secondary};
    }
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: ${colors.darkest};
  font-weight: bold;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;