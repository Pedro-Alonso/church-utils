import { ReactElement, useEffect, useState } from 'react';
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
import { request } from '../../hooks/axios.config';

interface SongData {
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

interface ResultsListProps {
  data: SongData[];
  clientAccessToken: string;
}

export const ResultsList = ({ data, clientAccessToken }: ResultsListProps): ReactElement => {
  const [currentSong, setCurrentSong] = useState<SongData | null>(null);
  const [lyrics, setLyrics] = useState<string>('');

  const handleSongHover = (song: SongData) => {
    setCurrentSong(song);
  };

  useEffect(() => {
    const getLyrics = async (song: SongData) => {
      const response = await request
        .get(`http://api.genius.com${song.result.path}?access_token=${clientAccessToken}`)
        .then((response: any) => {
          setLyrics(response.data.response.song.lyrics);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    if (currentSong) {
      console.log(currentSong.result);
      getLyrics(currentSong);
    }
  }, [clientAccessToken, currentSong]);

  return (
    <Wrapper>
      <ResultsWrapper>
        <h2>Top results</h2>
        {data.map((result, index) => (
          <ResultWrapper key={result.result.title} index={index} onMouseEnter={() => handleSongHover(result)}>
            <SongTitle>{result.result.title}</SongTitle>
            <SongFullTitle>{result.result.full_title}</SongFullTitle>
            <ArtistName>{result.result.primary_artist.name}</ArtistName>
            <SongImage src={result.result.header_image_thumbnail_url} alt={result.result.title} />
          </ResultWrapper>
        ))}
      </ResultsWrapper>
      <LyricsPreview
        title={currentSong?.result.title || ''}
        artist={currentSong?.result.primary_artist.name || ''}
        lyrics={lyrics}
      />
    </Wrapper>
  );
};
