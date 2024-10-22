import { useState, useEffect, useRef } from 'react';
import { ISearchLyrics, SongData } from './search-lyrics';
import { request } from '../../hooks/axios.config';
import { sanitizeParam } from '../../utils/sanitize-param';
import { sanitizeResponse } from '../../utils/sanitize-response';
import { generateInterval } from '../../utils/generate-timer';

export const useSearchLyrics = (): ISearchLyrics => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clientAccessToken, setClientAccessToken] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [songLyrics, setSongLyrics] = useState<string>('');
  const [currentSong, setCurrentSong] = useState<SongData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getResultsPreviewUrl = `http://api.genius.com/search?q=${searchTerm}&access_token=${clientAccessToken}`;
  const serverUrl = process.env.REACT_APP_BACKEND_LOCAL_URL ?? '';

  useEffect(() => {
    const requestAPI = async () => {
      try {
        const response = await request.get(serverUrl);
        console.log('Server is running:', response.data);
      } catch (error) {
        console.error(error);
      } finally {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        const newTime = generateInterval(60 * 3000, 60 * 5000);
        intervalRef.current = setTimeout(requestAPI, newTime);
      }
    };

    requestAPI();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [serverUrl]);

  useEffect(() => {
    setResults([]);
    const getResults = async () => {
      try {
        const response = await request.get(getResultsPreviewUrl);
        setResults(response.data.response.hits);
      } catch (error) {
        console.error(error);
      }
    };
    if (searchTerm) {
      getResults();
    }
  }, [getResultsPreviewUrl, searchTerm]);

  useEffect(() => {
    console.log('Server URL:', serverUrl);
    
    const getLyrics = async () => {
      const title = currentSong?.result.title || '';
      const artist = currentSong?.result.primary_artist.name || '';
      console.log('Getting lyrics for:', title, artist);

      setIsLoading(true);
      try {
        const sanitizedTitle = sanitizeParam(title);
        const sanitizedArtist = sanitizeParam(artist);
        const response = await request.get(
          `${serverUrl}/get-lyrics/${sanitizedArtist}/${sanitizedTitle}`,
          {
            headers: {
              'Client-access-token': clientAccessToken,
            },
          }
        );
        const formattedLyrics = sanitizeResponse(response.data.lyrics);
        setSongLyrics(formattedLyrics);
        console.log('Lyrics:', formattedLyrics);
      } catch (error) {
        console.error('Error running Python script:', error);
      }
      setIsLoading(false);
    };
    if (currentSong) {
      getLyrics();
    }
  }, [currentSong, clientAccessToken, serverUrl]);

  return {
    lyrics: songLyrics,
    isLoading,
    searchTerm,
    handleSearchTerm: setSearchTerm,
    clientAccessToken,
    handleAccessToken: setClientAccessToken,
    results,
    getSongData: setCurrentSong,
    songData: currentSong,
  };
};
