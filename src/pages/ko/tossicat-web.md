---
title: TossiCat Web
description: JavaScript에서 사용할 수 있는 한글 조사 변환 WebAssembly 패키지
layout: ../../layouts/MainLayout.astro
lang: ko
---

[TossiCat Web](https://github.com/tossicat/tossicat-web)은 [TossiCat Core](https://github.com/tossicat/tossicat-core)를 [wasm-pack](https://rustwasm.github.io/docs/wasm-pack/introduction.html)을 사용하여 WebAssembly로 컴파일한 JavaScript 패키지입니다.

- **GitHub**: [tossicat/tossicat-web](https://github.com/tossicat/tossicat-web)
- **npm**: [@dialektike/tossicat](https://www.npmjs.com/package/@dialektike/tossicat)
- **언어**: Rust, JavaScript (WebAssembly)

## 설치

`package.json`에 다음을 추가합니다:

```json
{
  "dependencies": {
    "@dialektike/tossicat": "^0.8.0"
  }
}
```

## 주요 함수

### `fix(word, tossi)`

단어와 토시를 입력받아 적절한 토시를 단어에 붙여 반환합니다.

```js
fix("밥", "을")    // "밥을"
fix("철수", "은")  // "철수는"
fix("사과", "이")  // "사과가"
```

### `fix_sentence(sentence)`

문장 내에 포함된 `{단어, 토시}` 형식을 모두 찾아 적절한 토시로 변환합니다.

```js
fix_sentence("{철수, 은} {영희, 과} {밥, 를} 먹습니다.")
// "철수는 영희와 밥을 먹습니다."
```

## 사용 예시

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

## 에러 처리

변환할 수 없는 토시가 입력되면 에러가 발생합니다. 다음과 같이 처리할 수 있습니다:

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

에러 메시지에 대한 자세한 내용은 [tossicat-core의 error.rs](https://github.com/tossicat/tossicat-core/blob/main/src/error.rs)를 참고하세요.

## 특징

- 외국어로 병기된 단어나 숫자가 포함된 단어도 마지막 글자가 한글이거나 숫자이면 처리 가능
- TossiCat Core와 동일한 138개 토시 지원
- WebAssembly 기반으로 빠른 처리 속도
