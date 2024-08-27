import { ReactElement } from 'react';

interface ILyricsPreview {
  useGetLyricsHook: () => void;
  title: string;
  artist: string;
  lyrics?: string;
}

export const LyricsPreview = ({ useGetLyricsHook, title, artist, lyrics }: ILyricsPreview): ReactElement => {
  return (
    <div onClick={useGetLyricsHook}>
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <p>{lyrics || 'Click to get lyrics'}</p>
    </div>
  );
};
