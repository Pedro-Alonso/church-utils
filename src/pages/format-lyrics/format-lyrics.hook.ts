import { useNavigate } from 'react-router-dom';
import { IFormatLyrics } from './format-lyrics';
import { useState, useEffect } from 'react';
import { SCREENS } from '../../assets/types';

export const useFormatLyrics = (): IFormatLyrics => {
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


  const handleGoBack = () => {
    navigate(SCREENS.HOME);
  };

  return {
    lyrics,
    hasCopied,
    handleLyricsChange: setLyrics,
    onSubmit,
    handleGoBack,
  };
};
