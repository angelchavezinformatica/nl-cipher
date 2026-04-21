import { ALPHABET } from "./alphabet";

export const findKey = (char: string): number => {
  const key = Object.keys(ALPHABET).find((k) => ALPHABET[parseInt(k)] === char);

  if (!key) throw new Error();

  return parseInt(key);
};
