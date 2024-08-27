import { ReactElement } from 'react';
import { Screen } from '../../components/screen/screen';
import { Button } from '../../components/button/button';
import { ButtonVariants } from '../../components/button/button';
import { TextInput, TextInputVariants } from '../../components/text-input/text-input';
import { Wrapper, Title, Subtitle, ButtonWrapper, Caption } from './format-lyrics.styles';
import { IFormatLyrics } from './format-lyrics';

export const FormatLyricsLayout = ({
  lyrics,
  hasCopied,
  handleLyricsChange,
  onSubmit,
  handleGoBack,
}: IFormatLyrics): ReactElement => {
  return (
    <Screen>
      <Wrapper>
        <Title>Formatar Letra</Title>
        <Subtitle>
          Cole a letra que deseja formatar no campo abaixo e clique em 'Formatar'. Ela será formatada e
          copiada para sua área de transferência.
        </Subtitle>
        <TextInput value={lyrics} onChange={handleLyricsChange} variant={TextInputVariants.TEXTAREA} />
        <ButtonWrapper>
          <Button variant={ButtonVariants.PRIMARY} onClick={() => onSubmit(lyrics)} text='Formatar' />
          <Button variant={ButtonVariants.SECONDARY} onClick={handleGoBack} text='Voltar' />
        </ButtonWrapper>
        {hasCopied && <Caption>Letra copiada para a área de transferência!</Caption>}
      </Wrapper>
    </Screen>
  );
};
