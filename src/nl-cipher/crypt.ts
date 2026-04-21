import { ALPHABET, ALPHABET_LENGTH } from "./alphabet";
import { Parser } from "@expr-eval/js";
import { findKey } from "./find-key";

export const crypt = (key: string, message: string): string => {
  const parser = new Parser();
  const expr = parser.parse(key);

  let crypted = "";

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    const key = findKey(char);

    const res = expr.evaluate({ x: key });

    if (!res) throw new Error();

    const resInt = parseInt(`${res.toString()}`); // 121

    const nIndex = Math.floor(resInt / ALPHABET_LENGTH);
    const mod = resInt % ALPHABET_LENGTH;

    if (nIndex !== 0) crypted += `${nIndex}`;

    crypted += ALPHABET[mod];

    if (i < message.length - 1) crypted += "|";
  }

  return crypted;
};
