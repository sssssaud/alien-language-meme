# 👽 Alien Language Translator

Type English, get alien. Type alien, get English. Based on the "ALIEN LANGUAGE" meme (`images.jpeg`).

**Try it live:** https://sssssaud.github.io/alien-language-meme/

**Run locally:** open `index.html` in any browser. No install, works offline.

## How the language works
1. **Meme words** keep the meme's exact translation: `hello` = `zap zup`, `friend` = `vip vop`, `I don't know` = `zab zup`, …
2. **Every other word** is spelled with one alien syllable per letter (`a` = `zop`, `b` = `bab`, … `z` = `vod`).
   `pizza` → `bubzidvodvodzop`. Each syllable is exactly 3 letters and none of them is a meme word, so any alien text decodes back with nothing lost.

Punctuation, numbers and spaces pass through unchanged. A capital first letter stays capital.

```
Hello friend, I want pizza.  →  Zap zup vip vop, Zap bubzidvodvodzop.
```

## Test
```
node test.js
```
