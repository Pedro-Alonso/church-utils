import { ReactElement } from 'react';
import {
  ArtistName,
  ResultsWrapper,
  ResultWrapper,
  SongFullTitle,
  SongImage,
  SongTitle,
  Wrapper,
} from './results-list.styles';
import { LyricsPreview } from '../lyrics-preview/lyrics-preview';
import { SongData } from '../../pages/search-lyrics/search-lyrics';

interface IResultsList {
  data: SongData[];
  lyrics?: string;
  getSongData: (songData: SongData) => void;
  songData: SongData | null;
  isLoading?: boolean;
}

export const ResultsList = ({
  data,
  getSongData,
  songData,
  lyrics,
  isLoading,
}: IResultsList): ReactElement => {
  return (
    <Wrapper>
      <ResultsWrapper>
        <h2>Top results</h2>
        {data.map((result, index) => (
          <ResultWrapper
            key={result.result.title}
            index={index}
            onMouseEnter={() => {
              getSongData(result);
            }}
          >
            <SongTitle>{result.result.title}</SongTitle>
            <SongFullTitle>{result.result.full_title}</SongFullTitle>
            <ArtistName>{result.result.primary_artist.name}</ArtistName>
            <SongImage src={result.result.header_image_thumbnail_url} alt={result.result.title} />
          </ResultWrapper>
        ))}
      </ResultsWrapper>
      <LyricsPreview
        title={songData?.result.title || ''}
        artist={songData?.result.primary_artist.name || ''}
        lyrics={lyrics}
        isLoading={isLoading}
      />
    </Wrapper>
  );
};
