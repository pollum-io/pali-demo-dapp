export const truncate = (input: string, size = 30) => {
  if (input.length < size) return input;

  return `${input.slice(0, size)}...`;
};
