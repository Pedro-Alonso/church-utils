import { ReactElement } from 'react';
import { Artist, Container, Lyrics, Title } from './lyrics-preview.styles';
import { TailSpin } from 'react-loader-spinner';

interface ILyricsPreview {
  title: string;
  artist: string;
  lyrics?: string;
  isLoading?: boolean;
}

export const LyricsPreview = ({ title, artist, lyrics, isLoading }: ILyricsPreview): ReactElement => {
  return (
    <Container>
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
      {isLoading ? <TailSpin /> : <Lyrics>{lyrics || 'Letra não encontrada'}</Lyrics>}
    </Container>
  );
};
