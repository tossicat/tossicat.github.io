---
title: TossiCat Project
description: Korean postposition conversion library - TossiCat Project introduction
layout: ../../layouts/MainLayout.astro
lang: en
---

**Welcome to the TossiCat Project!**

This project was inspired by [tossi](https://github.com/what-studio/tossi). It takes an arbitrary word and a postposition (called "tossi" in Korean) as input, then transforms the postposition into a natural form that fits the given word.

For example, given the following input:

`"{철수, 은} {영희, 과} {밥, 를} 먹습니다."`

It converts to:

`"철수는 영희와 밥을 먹습니다."`

## Why is this project needed?

When applications compose sentences to display to users, they need to automatically attach the correct Korean postposition based on the preceding word. For example, '사과' (apple) requires '를', while '밥' (rice) requires '을'. TossiCat automates this process.

Currently, it can handle **138 postpositions** and more are being added continuously.

## Project Structure

The TossiCat Project is built on a core library written in [Rust](https://www.rust-lang.org), with multiple sub-projects that make it available across various languages and environments.

### [TossiCat Core](https://github.com/tossicat/tossicat-core)

The core library. Written in Rust and published on [crates.io](https://crates.io/crates/tossicat). Provides functions like `postfix()`, `modify_sentence()`, and `transform()`.

```rust
use tossicat::postfix;
println!("{:?}", postfix("사과", "을")); // Ok("사과를")
```

### [TossiCat Web](https://github.com/tossicat/tossicat-web)

TossiCat Core compiled to WebAssembly for use in JavaScript. Published on [npm](https://www.npmjs.com/package/@dialektike/tossicat) as `@dialektike/tossicat`.

```js
fix("철수", "가")  // "철수가"
fix_sentence("{철수, 은} {영희, 과} {밥, 를} 먹습니다.")
// "철수는 영희와 밥을 먹습니다."
```

### [TossiCat Python](https://github.com/tossicat/tossicat-python)

A Python binding of TossiCat Core using [PyO3](https://github.com/PyO3/pyo3). Published on [PyPI](https://pypi.org/project/tossicat-python/).

```python
import tossicat as tc
tc.postfix("테스트", "은")  # "테스트는"
```

### [TossiCat FFI](https://github.com/tossicat/tossicat-ffi)

C FFI bindings for TossiCat Core. Enables Korean postposition conversion in game engines (Unreal, Unity, Godot, etc.) and C/C++ projects.

```c
char* result = tossicat_postfix("포션", "을");
printf("%s 획득했습니다!\n", result);  // "포션을 획득했습니다!"
tossicat_free(result);
```

### [TossiCat CMD](https://github.com/tossicat/tossicat-cmd)

A CLI application for postposition conversion. Perform conversions directly from the terminal.

```console
$ tossi -w 사과 -t 을
사과를

$ tossi -s "{철수, 은} {영희, 과} {밥, 를} 먹습니다."
철수는 영희와 밥을 먹습니다.
```

## Architecture

```
tossicat-core (Rust core library)
├── tossicat-web     (JavaScript/WebAssembly)
├── tossicat-python  (Python binding)
├── tossicat-ffi     (C FFI binding)
└── tossicat-cmd     (CLI application)
```

All sub-projects are built on top of tossicat-core, providing interfaces tailored to each language and environment. See the sidebar for detailed documentation on each project.
