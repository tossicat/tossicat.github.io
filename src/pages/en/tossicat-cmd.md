---
title: TossiCat CMD
description: CLI application for Korean postposition conversion
layout: ../../layouts/MainLayout.astro
lang: en
---

[TossiCat CMD](https://github.com/tossicat/tossicat-cmd) is a CLI (Command-Line Interface) application for Korean postposition conversion. It uses [TossiCat Core](https://github.com/tossicat/tossicat-core) as its library to perform conversions directly from the terminal.

- **GitHub**: [tossicat/tossicat-cmd](https://github.com/tossicat/tossicat-cmd)
- **Language**: Rust

## Building

### Development Build

```console
cargo build
cargo run -- -w 테스트 -t 은
```

### Release Build

```console
cargo build --release
```

The `tossi` executable will be created in the `target/release` directory.

## Usage

### Attaching Postposition to a Word

```console
$ tossi -w 사과 -t 을
사과를

$ tossi -w 집 -t 으로
집으로

$ tossi -w 테스트 -t 은
테스트는
```

### Output Only the Converted Postposition

Use the `-o` flag to output only the converted postposition:

```console
$ tossi -w 사과 -t 을 -o
를
```

### Sentence Conversion

Convert sentences containing `{word, tossi}` patterns all at once:

```console
$ tossi -s "{철수, 은} {영희, 과} {밥, 를} 먹습니다."
철수는 영희와 밥을 먹습니다.
```

## Options

```console
$ tossi --help
A program that converts postpositions (tossi) to match the input word

Usage: tossi [OPTIONS]

Options:
  -w, --word <WORD>          The word to apply the postposition to
  -t, --tossi <TOSSI>        The postposition to apply to the word
  -o, --only-tossi           Output only the converted postposition
  -s, --sentence <SENTENCE>  Convert a sentence containing postpositions
  -h, --help                 Print help
  -V, --version              Print version
```
