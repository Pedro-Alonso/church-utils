import styled from "styled-components";
import { colors } from "../../assets/themes";

export const Container = styled.div`
  width: 20rem;
  height: 30rem;
  `;

export const InputField = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  background-color: ${colors.lightest};
  border: none;
  padding: 1rem;
  overflow-y: scroll;

  &:focus {
    outline: none;
  }
`;
