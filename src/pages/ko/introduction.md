---
title: TossiCat Project
description: 한글 조사 변환 라이브러리 토시캣 프로젝트 소개
layout: ../../layouts/MainLayout.astro
lang: ko
---

**토시캣 프로젝트에 온 것을 환영합니다!**

이 프로젝트는 [tossi](https://github.com/what-studio/tossi)에서 영감을 받아 출발했습니다. 임의의 단어와 그 단어에 붙일 조사(즉 토시)를 입력하면, 입력한 조사를 단어에 자연스러운 형태로 바꿔서 반환해 줍니다.

예를 들어, 다음과 같은 형식으로 입력하면:

`"{철수, 은} {영희, 과} {밥, 를} 먹습니다."`

다음과 같이 변환해 줍니다:

`"철수는 영희와 밥을 먹습니다."`

## 왜 이 프로젝트가 필요할까요?

앱에서 문장을 조합해 사용자에게 보여줄 때, 단어에 따라 적절한 조사를 자동으로 붙여야 합니다. 예를 들어 '사과'에는 '를', '밥'에는 '을'을 붙여야 합니다. 토시캣은 이 과정을 자동화합니다.

현재 **138개의 토시**를 처리할 수 있으며, 지속적으로 추가하고 있습니다.

## 프로젝트 구성

토시캣 프로젝트는 [Rust](https://www.rust-lang.org)로 작성된 핵심 라이브러리를 기반으로, 다양한 언어와 환경에서 사용할 수 있도록 여러 하위 프로젝트로 구성되어 있습니다.

### [TossiCat Core](https://github.com/tossicat/tossicat-core)

핵심 라이브러리입니다. Rust로 작성되었으며, [crates.io](https://crates.io/crates/tossicat)에서 배포됩니다. `postfix()`, `modify_sentence()`, `transform()` 등의 함수를 제공합니다.

```rust
use tossicat::postfix;
println!("{:?}", postfix("사과", "을")); // Ok("사과를")
```

### [TossiCat Web](https://github.com/tossicat/tossicat-web)

TossiCat Core를 WebAssembly로 컴파일하여 JavaScript에서 사용할 수 있게 만든 패키지입니다. [npm](https://www.npmjs.com/package/@dialektike/tossicat)에서 `@dialektike/tossicat`으로 배포됩니다.

```js
fix("철수", "가")  // "철수가"
fix_sentence("{철수, 은} {영희, 과} {밥, 를} 먹습니다.")
// "철수는 영희와 밥을 먹습니다."
```

### [TossiCat Python](https://github.com/tossicat/tossicat-python)

[PyO3](https://github.com/PyO3/pyo3)를 사용하여 TossiCat Core를 Python에서 사용할 수 있게 만든 라이브러리입니다. [PyPI](https://pypi.org/project/tossicat-python/)에서 배포됩니다.

```python
import tossicat as tc
tc.postfix("테스트", "은")  # "테스트는"
```

### [TossiCat FFI](https://github.com/tossicat/tossicat-ffi)

TossiCat Core의 C FFI 바인딩입니다. 게임 엔진(Unreal, Unity, Godot 등)이나 C/C++ 프로젝트에서 한국어 조사 변환 기능을 사용할 수 있습니다.

```c
char* result = tossicat_postfix("포션", "을");
printf("%s 획득했습니다!\n", result);  // "포션을 획득했습니다!"
tossicat_free(result);
```

### [TossiCat CMD](https://github.com/tossicat/tossicat-cmd)

CLI(Command-Line Interface)에서 작동하는 토시 변환 앱입니다. 터미널에서 바로 조사 변환을 수행할 수 있습니다.

```console
$ tossi -w 사과 -t 을
사과를

$ tossi -s "{철수, 은} {영희, 과} {밥, 를} 먹습니다."
철수는 영희와 밥을 먹습니다.
```

## 프로젝트 구조도

```
tossicat-core (Rust 핵심 라이브러리)
├── tossicat-web     (JavaScript/WebAssembly)
├── tossicat-python  (Python 바인딩)
├── tossicat-ffi     (C FFI 바인딩)
└── tossicat-cmd     (CLI 앱)
```

모든 하위 프로젝트는 tossicat-core를 기반으로 동작하며, 각 언어/환경에 맞는 인터페이스를 제공합니다. 각 프로젝트에 대한 자세한 내용은 왼쪽 사이드바에서 확인하실 수 있습니다.
