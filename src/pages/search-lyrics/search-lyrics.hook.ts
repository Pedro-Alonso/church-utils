import { useState, useEffect } from 'react';
import { ISearchLyrics, SongData } from './search-lyrics';
import { request } from '../../hooks/axios.config';
import { sanitizeParam } from '../../utils/sanitize-param';

export const useSearchLyrics = (): ISearchLyrics => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clientAccessToken, setClientAccessToken] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [songLyrics, setSongLyrics] = useState<string>('');
  const [currentSong, setCurrentSong] = useState<SongData | null>(null);

  const getResultsPreviewUrl = `http://api.genius.com/search?q=${searchTerm}&access_token=${clientAccessToken}`;

  useEffect(() => {
    if (searchTerm) {
      request
        .get(getResultsPreviewUrl)
        .then((response) => {
          setResults(response.data.response.hits);
        })
        .catch((error) => {
          console.error(error);
        });
    } else setResults([]);
  }, [getResultsPreviewUrl, searchTerm]);

  useEffect(() => {
    const getLyrics = async () => {
      const title = currentSong?.result.title || '';
      const artist = currentSong?.result.primary_artist.name || '';
      console.log('Getting lyrics for:', title, artist);

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
    if (currentSong) {
      getLyrics();
    }
  }, [currentSong, clientAccessToken]);

  return {
    lyrics: songLyrics,
    searchTerm,
    handleSearchTerm: setSearchTerm,
    clientAccessToken,
    handleAccessToken: setClientAccessToken,
    results,
    getSongData: setCurrentSong,
    songData: currentSong,
  };
};
