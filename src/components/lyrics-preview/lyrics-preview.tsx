import { ReactElement } from 'react';
import { Artist, Container, Lyrics, SongInfo, Title } from './lyrics-preview.styles';
import { TailSpin } from 'react-loader-spinner';
import { themes } from '../../assets/themes';

interface ILyricsPreview {
  title: string;
  artist: string;
  lyrics?: string;
  isLoading?: boolean;
}

export const LyricsPreview = ({ title, artist, lyrics, isLoading }: ILyricsPreview): ReactElement => {
  const loaderProps = {
    visible: true,
    height: '100',
    width: '100',
    color: themes.colors.lightest,
    ariaLabel: 'loading',
    radius: '1',
  };

  return (
    <Container>
      <SongInfo>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </SongInfo>
      {isLoading ? <TailSpin {...loaderProps} /> : <Lyrics>{lyrics || 'Letra não encontrada'}</Lyrics>}
    </Container>
  );
};
