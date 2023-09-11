import assert from "node:assert";

const s = Bun.argv[2];

assert(s);
assert(/^\d+$/.test(s));

const computeIsFizz = (s: string) => {
  let per3 = 0;
  for (const c of s) {
    const n = Number(c);
    per3 = (per3 + n) % 3;
  }
  return per3 === 0;
};

const computeIsBuzz = (s: string) => {
  const last = s.at(-1);
  return last === '0' || last === '5';
};

const isFizz = computeIsFizz(s);
const isBuzz = computeIsBuzz(s);

const r = `${isFizz ? 'Fizz' : ''}${isBuzz ? 'Buzz' : ''}`;

console.log(r);
