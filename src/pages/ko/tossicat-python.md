---
title: TossiCat Python
description: Python에서 사용할 수 있는 한글 조사 변환 라이브러리
layout: ../../layouts/MainLayout.astro
lang: ko
---

[TossiCat Python](https://github.com/tossicat/tossicat-python)은 [PyO3](https://github.com/PyO3/pyo3)를 사용하여 [TossiCat Core](https://github.com/tossicat/tossicat-core)를 Python에서 사용할 수 있도록 바인딩한 라이브러리입니다.

- **GitHub**: [tossicat/tossicat-python](https://github.com/tossicat/tossicat-python)
- **PyPI**: [tossicat-python](https://pypi.org/project/tossicat-python/)
- **언어**: Rust, Python

## 설치

```bash
pip install tossicat-python
```

## 주요 함수

### `postfix(word, tossi)`

단어와 토시를 입력받아, 적절한 토시를 단어에 붙여 반환합니다.

```python
import tossicat as tc

tc.postfix("테스트", "은")  # "테스트는"
tc.postfix("사과", "을")    # "사과를"
tc.postfix("집", "으로")    # "집으로"
```

### `modify_sentence(sentence)`

문장 내에 포함된 `{단어, 토시}` 형식을 모두 찾아 적절한 토시로 변환합니다.

```python
import tossicat as tc

tc.modify_sentence("{한국어, 은} 정말 좋은 언어입니다. {커피, 을} 정말 좋아해요")
# "한국어는 정말 좋은 언어입니다. 커피를 정말 좋아해요"
```

### `transform(word, tossi)`

단어에 적절한 토시를 변형하여 단어와 토시를 각각 튜플로 반환합니다.

```python
import tossicat as tc

tc.transform("테스트", "은")  # ("테스트", "는")
tc.transform("구글", "으로부터")  # ("구글", "로부터")
```

## 특징

- TossiCat Core와 동일한 138개 토시 지원
- PyO3를 통한 네이티브 성능
- `pip install`로 간편한 설치
