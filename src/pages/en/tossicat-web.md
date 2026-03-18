---
title: TossiCat Web
description: Korean postposition conversion WebAssembly package for JavaScript
layout: ../../layouts/MainLayout.astro
lang: en
---

[TossiCat Web](https://github.com/tossicat/tossicat-web) is a JavaScript package that compiles [TossiCat Core](https://github.com/tossicat/tossicat-core) to WebAssembly using [wasm-pack](https://rustwasm.github.io/docs/wasm-pack/introduction.html).

- **GitHub**: [tossicat/tossicat-web](https://github.com/tossicat/tossicat-web)
- **npm**: [@dialektike/tossicat](https://www.npmjs.com/package/@dialektike/tossicat)
- **Languages**: Rust, JavaScript (WebAssembly)

## Installation

Add the following to your `package.json`:

```json
{
  "dependencies": {
    "@dialektike/tossicat": "^0.8.0"
  }
}
```

## Key Functions

### `fix(word, tossi)`

Takes a word and a postposition, attaches the appropriate postposition to the word, and returns the result.

```js
fix("밥", "을")    // "밥을"
fix("철수", "은")  // "철수는"
fix("사과", "이")  // "사과가"
```

### `fix_sentence(sentence)`

Finds all `{word, tossi}` patterns in a sentence and converts them with the appropriate postpositions.

```js
fix_sentence("{철수, 은} {영희, 과} {밥, 를} 먹습니다.")
// "철수는 영희와 밥을 먹습니다."
```

## Usage Example

```js
const js = import("@dialektike/tossicat/tossicat");

js.then(js => {
    const result1 = js.fix("철수", "가");
    const result2 = js.fix_sentence(
        "{철수, 은} {영희, 처럼} {밥, 를} 먹습니다."
    );
    console.log(result1);  // "철수가"
    console.log(result2);  // "철수는 영희처럼 밥을 먹습니다."
});
```

## Error Handling

An error is thrown when an unsupported postposition is provided. Handle it as follows:

```js
const js = import("@dialektike/tossicat/tossicat");

js.then(js => {
    try {
        const result = js.fix("철수", "apple");
        console.log(result);
    } catch (err) {
        console.error(err);
    }
});
```

For details on error messages, see [tossicat-core's error.rs](https://github.com/tossicat/tossicat-core/blob/main/src/error.rs).

## Features

- Handles words containing foreign characters or numbers (as long as the last character is Korean or a number)
- Supports the same 138 postpositions as TossiCat Core
- Fast processing powered by WebAssembly
