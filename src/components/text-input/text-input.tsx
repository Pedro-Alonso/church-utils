import { ReactElement } from "react";
import { Container, InputField } from "./text-input.styles";

interface TextInputProps {
  value: string;
  onChange: (text: string) => void;
}

export const TextInput = ({
  value,
  onChange,
}: TextInputProps): ReactElement => {
  return (
    <Container>
      <InputField value={value} onChange={(e) => onChange(e.target.value)} />
    </Container>
  );
};
