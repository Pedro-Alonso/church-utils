import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-self: flex-start;
  margin-top: 2rem;
  gap: 1rem;
`;

export const ResultsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const ResultWrapper = styled.div<{ index: number }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${(props) => (props.index % 2 === 0 ? 'rgba(0, 0, 0, 0.05)' : 'transparent')};
  padding: 1rem;
`;

export const SongTitle = styled.h2``;

export const SongFullTitle = styled.p``;

export const ArtistName = styled.p``;

export const SongImage = styled.img`
  width: 100px;
  height: 100px;
`;
