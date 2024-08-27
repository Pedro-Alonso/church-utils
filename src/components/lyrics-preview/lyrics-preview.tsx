import { ReactElement } from 'react';
import { Artist, Container, Lyrics, Title } from './lyrics-preview.styles';

interface ILyricsPreview {
  title: string;
  artist: string;
  lyrics?: string;
}

export const LyricsPreview = ({ title, artist, lyrics }: ILyricsPreview): ReactElement => {
  return (
    <Container>
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
      <Lyrics>{lyrics || ''}</Lyrics>
    </Container>
  );
};
