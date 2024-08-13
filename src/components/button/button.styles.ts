import styled from "styled-components";
import { ButtonVariants } from "./types";
import { themes } from "../../assets/themes";

export const Container = styled.button<{ type: ButtonVariants }>`
  width: 10rem;
  height: 3rem;
  border-radius: 5rem;	
  background-color: ${({ type }) =>
    type === ButtonVariants.PRIMARY ? themes.colors.primary : "none"};
  border: ${({ type }) =>
    type === ButtonVariants.PRIMARY ? "none" : "1px solid black"};

  &:hover {
    background-color: ${({ type }) =>
      type === ButtonVariants.PRIMARY ? "darkblue" : "gray"};
  }

  &:active {
    background-color: ${({ type }) =>
      type === ButtonVariants.PRIMARY ? themes.colors.primary : "gray"};
  }

  &:focus {
    outline: none;
  }
`;

export const Paragraph = styled.p<{ type: ButtonVariants }>`
  color: ${({ type }) => (type === ButtonVariants.PRIMARY ? "white" : "black")};
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  line-height: 3rem;

  &:hover {
    color: ${({ type }) =>
      type === ButtonVariants.PRIMARY ? "gray" : "white"};
  }
`;
