import { ReactElement } from 'react';
import { useFormatLyrics } from './format-lyrics.hook';
import { FormatLyricsLayout } from './format-lyrics.layout';

export interface IFormatLyrics {
  lyrics: string;
  hasCopied: boolean;
  handleLyricsChange: (lyrics: string) => void;
  onSubmit: (lyrics: string) => void;
  handleGoBack: () => void;
}

export const FormatLyrics = (): ReactElement => {
  const { lyrics, hasCopied, handleLyricsChange, onSubmit, handleGoBack } = useFormatLyrics();

  return (
    <FormatLyricsLayout
      handleGoBack={handleGoBack}
      handleLyricsChange={handleLyricsChange}
      hasCopied={hasCopied}
      lyrics={lyrics}
      onSubmit={onSubmit}
    />
  );
};
