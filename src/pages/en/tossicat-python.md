---
title: TossiCat Python
description: Korean postposition conversion library for Python
layout: ../../layouts/MainLayout.astro
lang: en
---

[TossiCat Python](https://github.com/tossicat/tossicat-python) is a Python binding of [TossiCat Core](https://github.com/tossicat/tossicat-core) using [PyO3](https://github.com/PyO3/pyo3).

- **GitHub**: [tossicat/tossicat-python](https://github.com/tossicat/tossicat-python)
- **PyPI**: [tossicat-python](https://pypi.org/project/tossicat-python/)
- **Languages**: Rust, Python

## Installation

```bash
pip install tossicat-python
```

## Key Functions

### `postfix(word, tossi)`

Takes a word and a postposition, attaches the appropriate postposition to the word, and returns the result.

```python
import tossicat as tc

tc.postfix("테스트", "은")  # "테스트는"
tc.postfix("사과", "을")    # "사과를"
tc.postfix("집", "으로")    # "집으로"
```

### `modify_sentence(sentence)`

Finds all `{word, tossi}` patterns in a sentence and converts them with the appropriate postpositions.

```python
import tossicat as tc

tc.modify_sentence("{한국어, 은} 정말 좋은 언어입니다. {커피, 을} 정말 좋아해요")
# "한국어는 정말 좋은 언어입니다. 커피를 정말 좋아해요"
```

### `transform(word, tossi)`

Transforms the postposition to match the word and returns them as a tuple.

```python
import tossicat as tc

tc.transform("테스트", "은")      # ("테스트", "는")
tc.transform("구글", "으로부터")  # ("구글", "로부터")
```

## Features

- Supports the same 138 postpositions as TossiCat Core
- Native performance through PyO3
- Simple installation via `pip install`
