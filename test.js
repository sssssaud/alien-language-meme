// Run: node test.js — checks the translator logic inside index.html.
const fs = require("fs");
const vm = require("vm");
const assert = require("assert");

const html = fs.readFileSync(__dirname + "/index.html", "utf8");
const src = html.match(/<script id="alien">([\s\S]*?)<\/script>/)[1];
const { toAlien, toEnglish, PHRASES, LETTERS } = vm.runInNewContext(src + ";({ toAlien, toEnglish, PHRASES, LETTERS })");

// Alphabet is decodable: 26 unique 3-letter syllables, none equal to a meme word.
const memeWords = new Set(Object.values(PHRASES).join(" ").split(" "));
assert.equal(new Set(LETTERS).size, 26);
for (const s of LETTERS) { assert.equal(s.length, 3); assert(!memeWords.has(s), s); }

// Meme lines translate exactly as in the meme, both ways.
for (const [en, al] of Object.entries(PHRASES)) {
  assert.equal(toAlien(en.toLowerCase()), al);
  assert.equal(toEnglish(al), en);
}

// Any sentence survives a round trip.
for (const s of [
  "Hello friend, I want pizza.",
  "I don't know, same.",
  "Good morning! Yes, I can fly to Mars in 2030.",
  "goodnight skibidi",
  "The quick brown fox jumps over the lazy dog.",
  "okay no, love you café",
]) assert.equal(toEnglish(toAlien(s)), s);

// Meme phrases side by side never blur into a different phrase.
const keys = Object.keys(PHRASES);
for (const a of keys) for (const b of keys) for (const c of keys) {
  const s = `${a} ${b} ${c}`;
  assert.equal(toEnglish(toAlien(s)), s);
}

// Unknown alien words are left as typed.
assert.equal(toEnglish("zzz hello"), "zzz hello");

console.log("all good:", toAlien("Hello friend, I want pizza."));
