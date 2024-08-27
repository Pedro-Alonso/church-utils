import { useState, useEffect } from 'react';
import { ISearchLyrics } from './search-lyrics';
import { request } from '../../hooks/axios.config';

export const useSearchLyrics = (): ISearchLyrics => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clientAccessToken, setClientAccessToken] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const fetchUrl = `http://api.genius.com/search?q=${searchTerm}&access_token=${clientAccessToken}`;

  useEffect(() => {
    if (searchTerm) {
      request
        .get(fetchUrl)
        .then((response) => {
          setResults(response.data.response.hits);
        })
        .catch((error) => {
          console.error(error);
        });
    } else setResults([]);
  }, [fetchUrl, searchTerm]);

  return {
    searchTerm,
    handleSearchTerm: setSearchTerm,
    clientAccessToken,
    handleAccessToken: setClientAccessToken,
    results,
  };
};
