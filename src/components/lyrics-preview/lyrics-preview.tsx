import { ReactElement, useState } from 'react';
import { request } from '../../hooks/axios.config';
import { sanitizeParam } from '../../utils/sanitize-param';

interface LyricsPreviewProps {
  title: string;
  artist: string;
  clientAccessToken: string;
}

export const LyricsPreview = ({ title, artist, clientAccessToken }: LyricsPreviewProps): ReactElement => {
  const [songLyrics, setSongLyrics] = useState<string>('');

  const runPythonSnippet = async () => {
    try {
      const sanitizedTitle = sanitizeParam(title);
      const sanitizedArtist = sanitizeParam(artist);
      const response = await request.get(
        `http://127.0.0.1:5000/get-lyrics/${sanitizedArtist}/${sanitizedTitle}`,
        {
          headers: {
            'Client-access-token': clientAccessToken,
          },
        }
      );
      const formattedLyrics = response.data.lyrics;
      setSongLyrics(formattedLyrics);
      console.log('Lyrics:', formattedLyrics);
    } catch (error) {
      console.error('Error running Python script:', error);
    }
  };

  return (
    <div onClick={runPythonSnippet}>
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <p>{songLyrics || 'Click to get lyrics'}</p>
    </div>
  );
};
