import { ReactElement, useEffect, useState } from 'react';
import { Screen } from '../../components/screen/screen';
import { TextInput, TextInputVariants } from '../../components/text-input/text-input';
import { Button } from '../../components/button/button';
import { ButtonVariants } from '../../components/button/types';
import { useNavigate } from 'react-router-dom';
import { SCREENS } from '../../assets/types';
import { ButtonWrapper, Caption, Subtitle, Title, Wrapper } from './format-lyrics.styles';

export const FormatLyrics = (): ReactElement => {
  const navigate = useNavigate();

  const [lyrics, setLyrics] = useState<string>('');
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  const onSubmit = (value: string) => {
    const formattedLyrics = value.split('\n').join('\n\n');
    setLyrics(formattedLyrics);
    copyToClipboard(formattedLyrics);
    setHasCopied(true);
  };

  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false);
      }, 5000);
    }
  }, [hasCopied]);

  return (
    <Screen>
      <Wrapper>
        <Title>Formatar Letra</Title>
        <Subtitle>
          Cole a letra que deseja formatar no campo abaixo e clique em 'Formatar'. Ela será formatada e
          copiada para sua área de transferência.
        </Subtitle>
        <TextInput value={lyrics} onChange={(text) => setLyrics(text)} variant={TextInputVariants.TEXTAREA} />
        <ButtonWrapper>
          <Button type={ButtonVariants.PRIMARY} onClick={() => onSubmit(lyrics)} text='Formatar' />
          <Button type={ButtonVariants.SECONDARY} onClick={() => navigate(SCREENS.HOME)} text='Voltar' />
        </ButtonWrapper>
        {hasCopied && <Caption>Letra copiada para a área de transferência!</Caption>}
      </Wrapper>
    </Screen>
  );
};
