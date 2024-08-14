import styled from 'styled-components';
import { themes } from '../../assets/themes';

export const Container = styled.div``;

export const TextareaField = styled.textarea`
  resize: none;
  width: 20rem;
  height: 30rem;
  background-color: ${themes.colors.lightest};
  border: none;
  padding: 1rem;
  overflow-y: scroll;

  &:focus {
    outline: none;
  }
`;

export const InputField = styled.input.attrs({ type: 'text' })`
  width: 10rem;
  height: 2rem;
  background-color: ${themes.colors.lightest};
  border: none;
  padding: .5rem;

  &:focus {
    outline: none;
  }
`;
