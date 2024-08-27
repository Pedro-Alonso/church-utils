import styled from 'styled-components';
import { themes } from '../../assets/themes';
import { ButtonVariants } from './button';

export const Container = styled.button<{ variant: ButtonVariants }>`
  width: 10rem;
  height: 3rem;
  border-radius: 5rem;
  background-color: ${({ variant }) => (variant === ButtonVariants.PRIMARY ? themes.colors.primary : 'none')};
  border: ${({ variant }) => (variant === ButtonVariants.PRIMARY ? 'none' : '1px solid black')};

  &:hover {
    background-color: ${({ variant }) => (variant === ButtonVariants.PRIMARY ? 'darkblue' : 'gray')};
  }

  &:active {
    background-color: ${({ variant }) =>
      variant === ButtonVariants.PRIMARY ? themes.colors.primary : 'gray'};
  }

  &:focus {
    outline: none;
  }
`;

export const Paragraph = styled.p<{ variant: ButtonVariants }>`
  color: ${({ variant }) => (variant === ButtonVariants.PRIMARY ? 'white' : 'black')};
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  line-height: 3rem;

  &:hover {
    color: ${({ variant }) => (variant === ButtonVariants.PRIMARY ? 'gray' : 'white')};
  }
`;
