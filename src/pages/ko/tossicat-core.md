---
title: TossiCat Core
description: Rust로 작성된 한글 조사 변환 핵심 라이브러리
layout: ../../layouts/MainLayout.astro
lang: ko
---

[TossiCat Core](https://github.com/tossicat/tossicat-core)는 토시캣 프로젝트의 핵심 라이브러리입니다. Rust로 작성되었으며, 입력된 단어에 맞게 조사(토시)를 적절하게 변환해 줍니다.

- **GitHub**: [tossicat/tossicat-core](https://github.com/tossicat/tossicat-core)
- **crates.io**: [tossicat](https://crates.io/crates/tossicat)
- **docs.rs**: [tossicat](https://docs.rs/tossicat/)
- **언어**: Rust

## 설치

`Cargo.toml` 파일의 `[dependencies]`에 다음을 추가합니다:

```toml
[dependencies]
tossicat = "0.8.0"
```

## 주요 함수

### `postfix(word, tossi)`

단어와 토시를 입력받아, 적절한 토시를 단어에 붙여 반환합니다.

```rust
use tossicat::postfix;

postfix("사과", "을")  // Ok("사과를")
postfix("집", "으로")  // Ok("집으로")
```

### `modify_sentence(sentence)`

문장 내에 포함된 `{단어, 토시}` 형식을 모두 찾아 적절한 토시로 변환합니다.

```rust
use tossicat::modify_sentence;

modify_sentence("{철수, 은} {영희, 과} {밥, 를} 먹습니다.")
// Ok("철수는 영희와 밥을 먹습니다.")
```

### `transform(word, tossi)`

단어에 적절한 토시를 변형하여 단어와 토시를 각각 반환합니다.

```rust
use tossicat::transform;

transform("구글", "으로부터")  // Ok(("구글", "로부터"))
```

## 처리 가능한 토시

토시캣은 토시를 두 종류로 분류합니다:

1. **변환을 고려해야 하는 토시들**: 105개 — 앞 단어에 따라 형태가 바뀌는 토시 (예: 은/는, 이/가, 을/를)
2. **변환할 필요가 없는 토시들**: 33개 — 어떤 단어에도 동일한 형태로 붙는 토시 (예: 처럼, 부터, 까지)

총 **138개**의 토시를 처리할 수 있으며, 외국어 단어 입력 시 `"(을)를"`과 같이 병기 처리도 지원합니다.

전체 목록은 [available_tossi_list.md](https://github.com/tossicat/tossicat-core/blob/main/docs/available_tossi_list.md)를 참고하세요.

## 빌드

```console
cargo build --release
```

예제를 실행하려면:

```console
cargo run --example basic
```

## 처리가 필요한 토시

새로운 토시 처리가 필요하시면 [이슈](https://github.com/tossicat/tossicat-core/issues)에 남겨 주세요.
