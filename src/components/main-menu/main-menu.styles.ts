import styled from "styled-components";
import { themes } from "../../assets/themes";

export const Container = styled.div`
  width: 30rem;
  height: 37.5rem;
  padding: 4rem 0 4rem 0;
  gap: 1.25rem;
  background-color: ${themes.colors.lightest};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 1rem 0.125rem ${themes.colors.darkest};
`;
