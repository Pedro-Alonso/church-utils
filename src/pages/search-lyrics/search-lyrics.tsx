import { ReactElement } from 'react';
import { useSearchLyrics } from './search-lyrics.hook';
import { SearchLyricsLayout } from './search-lyrics.layout';

export interface SongData {
  result: {
    id: number;
    title: string;
    full_title: string;
    path: string;
    primary_artist: {
      name: string;
    };
    header_image_thumbnail_url: string;
  };
}
export interface ISearchLyrics {
  useGetLyricsHook: () => void;
  lyrics?: string;
  searchTerm: string;
  handleSearchTerm: (text: string) => void;
  clientAccessToken: string;
  handleAccessToken: (text: string) => void;
  results: any[];
  getSongData: (songData: SongData) => void;
  songData: SongData | null;
}

export const SearchLyrics = (): ReactElement => {
  const {
    useGetLyricsHook,
    lyrics,
    searchTerm,
    handleSearchTerm,
    clientAccessToken,
    handleAccessToken,
    results,
    getSongData,
    songData,
  } = useSearchLyrics();

  return (
    <SearchLyricsLayout
      useGetLyricsHook={useGetLyricsHook}
      lyrics={lyrics}
      searchTerm={searchTerm}
      handleSearchTerm={handleSearchTerm}
      clientAccessToken={clientAccessToken}
      handleAccessToken={handleAccessToken}
      results={results}
      getSongData={getSongData}
      songData={songData}
    />
  );
};
