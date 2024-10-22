export const sanitizeResponse = (response: string): string => {
  const keyword = 'Lyrics';

  const index = response.indexOf(keyword);

  if (index === -1) {
    return response;
  }

  return response.slice(index + keyword.length).trim();
};
