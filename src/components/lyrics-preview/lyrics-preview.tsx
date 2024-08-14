import { ReactElement } from 'react';

interface LyricsPreviewProps {
  title: string;
  artist: string;
  lyrics: string;
}

export const LyricsPreview = ({ title, artist, lyrics }: LyricsPreviewProps): ReactElement => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <p>{lyrics}</p>
    </div>
  );
};
