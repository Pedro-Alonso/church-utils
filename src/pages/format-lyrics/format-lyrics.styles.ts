import styled from 'styled-components';
import { themes } from '../../assets/themes';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  margin-top: 2rem;
  gap: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: ${themes.fonts.size.xxxl};
`;

export const Subtitle = styled.h2`
  font-size: ${themes.fonts.size.l};
`;

export const Caption = styled.p`
  font-size: ${themes.fonts.size.m};
`;
