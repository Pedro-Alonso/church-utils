import { ReactElement } from 'react';

interface ILyricsPreview {
  useGetLyricsHook: () => void;
  title: string;
  artist: string;
  lyrics?: string;
}

export const LyricsPreview = ({ useGetLyricsHook, title, artist, lyrics }: ILyricsPreview): ReactElement => {
  return (
    <Container>
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
      <Lyrics>{lyrics || ''}</Lyrics>
    </Container>
  );
};
