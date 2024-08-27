import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: sticky;
  top: 0;
  gap: 1rem;
  padding-top: 2rem;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const Title = styled.h1``;

export const Artist = styled.h2``;

export const Lyrics = styled.p`
  white-space: pre-line;
`;
