import { ResultsList } from '../../components/results-list/results-list';
import { TextInput, TextInputVariants } from '../../components/text-input/text-input';
import { Wrapper, Title, Subtitle } from './search-lyrics.styles';
import { Screen } from '../../components/screen/screen';
import { ISearchLyrics } from './search-lyrics';

export const SearchLyricsLayout = ({
  lyrics,
  searchTerm,
  handleSearchTerm,
  clientAccessToken,
  handleAccessToken,
  results,
  getSongData,
  songData,
}: ISearchLyrics) => {
  return (
    <Screen>
      <Wrapper>
        <Title>Pesquisar letra</Title>
        <Subtitle>
          Termo de pesquisa:
          <TextInput
            value={searchTerm}
            onChange={(text) => handleSearchTerm(text)}
            variant={TextInputVariants.INPUT}
          />
          Chave de acesso:
          <TextInput
            value={clientAccessToken}
            onChange={(text) => handleAccessToken(text)}
            variant={TextInputVariants.INPUT}
          />
        </Subtitle>
        <Subtitle>Client access token: {clientAccessToken}</Subtitle>

        <ResultsList
          data={results}
          getSongData={getSongData}
          songData={songData}
          lyrics={lyrics}
        />
      </Wrapper>
    </Screen>
  );
};
