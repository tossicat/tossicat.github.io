---
title: TossiCat Core
description: Korean postposition conversion core library written in Rust
layout: ../../layouts/MainLayout.astro
lang: en
---

[TossiCat Core](https://github.com/tossicat/tossicat-core) is the core library of the TossiCat Project. Written in Rust, it automatically converts Korean postpositions (tossi) to match the preceding word.

- **GitHub**: [tossicat/tossicat-core](https://github.com/tossicat/tossicat-core)
- **crates.io**: [tossicat](https://crates.io/crates/tossicat)
- **docs.rs**: [tossicat](https://docs.rs/tossicat/)
- **Language**: Rust

## Installation

Add the following to `[dependencies]` in your `Cargo.toml`:

```toml
[dependencies]
tossicat = "0.8.0"
```

## Key Functions

### `postfix(word, tossi)`

Takes a word and a postposition, attaches the appropriate postposition to the word, and returns the result.

```rust
use tossicat::postfix;

postfix("사과", "을")  // Ok("사과를")
postfix("집", "으로")  // Ok("집으로")
```

### `modify_sentence(sentence)`

Finds all `{word, tossi}` patterns in a sentence and converts them with the appropriate postpositions.

```rust
use tossicat::modify_sentence;

modify_sentence("{철수, 은} {영희, 과} {밥, 를} 먹습니다.")
// Ok("철수는 영희와 밥을 먹습니다.")
```

### `transform(word, tossi)`

Transforms the postposition to match the word and returns them separately.

```rust
use tossicat::transform;

transform("구글", "으로부터")  // Ok(("구글", "로부터"))
```

## Supported Postpositions

TossiCat classifies postpositions into two categories:

1. **Postpositions requiring conversion**: 105 — postpositions that change form based on the preceding word (e.g., 은/는, 이/가, 을/를)
2. **Postpositions not requiring conversion**: 33 — postpositions that remain the same regardless of the word (e.g., 처럼, 부터, 까지)

A total of **138 postpositions** are supported, with additional combined forms for foreign words (e.g., "(을)를").

See the full list at [available_tossi_list.md](https://github.com/tossicat/tossicat-core/blob/main/docs/available_tossi_list.md).

## Building

```console
cargo build --release
```

To run examples:

```console
cargo run --example basic
```

## Feature Requests

If you need support for additional postpositions, please open an [issue](https://github.com/tossicat/tossicat-core/issues).
