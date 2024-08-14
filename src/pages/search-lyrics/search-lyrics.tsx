import { ReactElement, useEffect, useState } from 'react';
import { request } from '../../hooks/axios.config';
import { Screen } from '../../components/screen/screen';
import { Subtitle, Title, Wrapper } from './search-lyrics.styles';
import { TextInput, TextInputVariants } from '../../components/text-input/text-input';
import { ResultsList } from '../../components/results-list/results-list';

export const SearchLyrics = (): ReactElement => {
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
    }
  }, [fetchUrl, searchTerm]);

  return (
    <Screen>
      <Wrapper>
        <Title>Pesquisar letra</Title>
        <Subtitle>
          Termo de pesquisa:
          <TextInput
            value={searchTerm}
            onChange={(text) => setSearchTerm(text)}
            variant={TextInputVariants.INPUT}
          />
          Chave de acesso:
          <TextInput
            value={clientAccessToken}
            onChange={(text) => setClientAccessToken(text)}
            variant={TextInputVariants.INPUT}
          />
        </Subtitle>
        <Subtitle>Client access token: {clientAccessToken}</Subtitle>

        <ResultsList data={results} clientAccessToken={clientAccessToken} />
      </Wrapper>
    </Screen>
  );
};
