---
title: TossiCat CMD
description: CLI에서 작동하는 한글 조사 변환 앱
layout: ../../layouts/MainLayout.astro
lang: ko
---

[TossiCat CMD](https://github.com/tossicat/tossicat-cmd)는 CLI(Command-Line Interface)에서 작동하는 토시 변환 앱입니다. [TossiCat Core](https://github.com/tossicat/tossicat-core)를 라이브러리로 사용하여 터미널에서 바로 조사 변환을 수행할 수 있습니다.

- **GitHub**: [tossicat/tossicat-cmd](https://github.com/tossicat/tossicat-cmd)
- **언어**: Rust

## 빌드

### 개발 빌드

```console
cargo build
cargo run -- -w 테스트 -t 은
```

### 릴리스 빌드

```console
cargo build --release
```

빌드하면 `target/release` 폴더에 `tossi` 실행 파일이 생성됩니다.

## 사용법

### 단어에 토시 적용

```console
$ tossi -w 사과 -t 을
사과를

$ tossi -w 집 -t 으로
집으로

$ tossi -w 테스트 -t 은
테스트는
```

### 변환된 토시만 출력

`-o` 옵션을 사용하면 변환된 토시만 출력할 수 있습니다:

```console
$ tossi -w 사과 -t 을 -o
를
```

### 문장 변환

`{단어, 토시}` 형식이 포함된 문장을 한 번에 변환할 수 있습니다:

```console
$ tossi -s "{철수, 은} {영희, 과} {밥, 를} 먹습니다."
철수는 영희와 밥을 먹습니다.
```

## 옵션

```console
$ tossi --help
입력한 단어에 맞게 토시(조사)를 변환해주는 프로그램

Usage: tossi [OPTIONS]

Options:
  -w, --word <WORD>          토시를 적용하고 싶은 단어
  -t, --tossi <TOSSI>        입력한 단어에 적용할 토시
  -o, --only-tossi           변환된 토시만 출력
  -s, --sentence <SENTENCE>  토시가 포함된 문장을 변환
  -h, --help                 도움말 출력
  -V, --version              버전 출력
```
