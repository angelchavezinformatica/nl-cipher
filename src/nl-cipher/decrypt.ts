import { ALPHABET, ALPHABET_LENGTH } from "./alphabet";
import { Expression, Parser } from "@expr-eval/js";
import { findKey } from "./find-key";

const separate = (seg: string) => {
  return {
    n: parseInt(seg.slice(0, -1)) | 0,
    L: seg.slice(-1),
  };
};

const decryptSeg = (expr: Expression, seg: string) => {
  const s = separate(seg);
  const key = findKey(s.L);

  const res = expr.evaluate({ y: key + s.n * ALPHABET_LENGTH });
  if (!res) throw new Error();
  const resInt = parseInt(`${res.toString()}`);

  return ALPHABET[resInt];
};

export const decrypt = (key: string, crypted: string): string => {
  const parser = new Parser();
  const expr = parser.parse(key);

  let message = "";
  let seg = "";

  for (let i = 0; i < crypted.length; i++) {
    const char = crypted[i];

    if (char === "|") {
      if (i <= crypted.length && crypted[i + 1] === "|") {
        seg += char;
        continue;
      }

      message += decryptSeg(expr, seg);

      seg = "";
      continue;
    }

    seg += char;
  }

  message += decryptSeg(expr, seg);

  return message;
};
