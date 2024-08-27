import { ReactElement } from 'react';
import { Container, InputField, TextareaField } from './text-input.styles';

export enum TextInputVariants {
  TEXTAREA = 'textarea',
  INPUT = 'input',
}

interface ITextInput {
  value: string;
  onChange: (text: string) => void;
  variant: TextInputVariants;
}

export const TextInput = ({ value, onChange, variant }: ITextInput): ReactElement => {
  return (
    <Container>
      {variant === TextInputVariants.TEXTAREA && (
        <TextareaField value={value} onChange={(e) => onChange(e.target.value)} />
      )}
      {variant === TextInputVariants.INPUT && (
        <InputField type='text' value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </Container>
  );
};
