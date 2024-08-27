import { ReactElement } from 'react';
import { useSearchLyrics } from './search-lyrics.hook';
import { SearchLyricsLayout } from './search-lyrics.layout';

export interface ISearchLyrics {
  searchTerm: string;
  handleSearchTerm: (text: string) => void;
  clientAccessToken: string;
  handleAccessToken: (text: string) => void;
  results: any[];
}

export const SearchLyrics = (): ReactElement => {
  const { searchTerm, handleSearchTerm, clientAccessToken, handleAccessToken, results } = useSearchLyrics();

  return (
    <SearchLyricsLayout
      searchTerm={searchTerm}
      handleSearchTerm={handleSearchTerm}
      clientAccessToken={clientAccessToken}
      handleAccessToken={handleAccessToken}
      results={results}
    />
  );
};
