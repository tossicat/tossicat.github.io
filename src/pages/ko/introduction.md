---
title: TossiCat Project
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

**토시캣 프로젝트에 온 것을 환영합니다!**

이곳은 [tossi](https://github.com/what-studio/tossi)에서 영감을 받아 출발했습니다. 앞의 **tossi**처럼 이 프로젝트도 임의의 단어와 그 단어에 붙일 조사(즉 토시)를 입력하면, 입력한 조사를 같이 입력한 단어에 자연스러운 형태로 바꿔서 반환해 주는 [토시캣 코어(TossiCat core)](https://github.com/tossicat/tossicat-core)을 시작하게 되었습니다. 앞의 **tossi**은 파이썬으로 작성되었지만, 이 **토시캣 프로젝트**는 기본적으로 [러스트](https://www.rust-lang.org)으로 작성되고 있습니다. 이렇게 러스트로 작성된 것을 토대로 파이썬이나 자바스크립트에서도 사용할 수 있게 변환해서 각 프로그래밍 언어에 맞춰 별도의 패키지로 만들고 있습니다. 아래 리스트를 보시면 알 수 있습니다.

- [tossicat for Web](https://www.npmjs.com/package/@dialektike/tossicat) : 토시캣 코어를 자바스크립트에서 사용하게 만듭니다.
- [tossicat-python](https://github.com/tossicat/tossicat-python) :  토시캣 코어를 파이썬에 사용하게 만듭니다.

이런 과정이 우리 토시캣 프로젝트가 하고자 하는 과정입니다. 현재는 한글 토시(조사) 변환에 관한 것만 다루고 있지만, 한글에 관련된 라이브러리를 러스트로 작성하여 이를 다양한 언어에서 사용할 수 있게 위에서 처럼 바꾸고자 합니다.

## 세부적인 프로젝트에 대하여

기본적으로 한글과 관련된 것만 다루고자 합니다.

### 토시캣 코어 프로젝트

앞에서 설명한 것처럼 이 프로젝트는 그 단어에 붙일 조사(즉 토시)를 입력하면, 입력한 조사를 같이 입력한 단어에 자연스러운 형태로 바꿔서 반환해 주는 [토시캣 코어(TossiCat core)](https://github.com/tossicat/tossicat-core)를 중심으로 이루어져 있습니다. 왜 이런 기능이 필요할까요? 다시 말해 왜 단어마다 토시를 바꿔서 붙여야 할까요? 예를 들어 봅시다.

'사과'라는 단어에 목적격 조사(을/를)를 붙일 경우, '을'이 아닌 '를'을 붙여야 합니다. 왜냐하면 목적격조사는 바로 앞 글자에 받침이 없으면 '을', 받침이 있다면 '를'을 사용해야 하기 때문입니다. 물론 '사과'라는 단어에 '처럼'이라는 조사를 붙일 경우에는 이런 변화를 고려할 필요가 없습니다. 왜냐하면 '처럼'이라는 조사는 어떠한 단어에도 변칙 없이 붙일 수 있기 때문입니다. 이처럼 조사에 따라 바꿔 붙여야 하는 경우가 있고, 그렇게 할 필요가 없는 경우가 있을 수 있습니다. 바꿔 붙여야 하는 경우에도 어떤 규칙을 사용하고 있는지 선택해야 합니다.

물론 한국어를 사용하는 한국인 입장에서는 학교 교육을 받으면서 이런 것들을 쉽게 구별해 꽤 정확하게 처리할 수 있습니다. 그러나 외국인 입장에서 보면 그리 쉽지 않습니다. 더 중요한 문제는 앱 안에서 문장을 조합해서 사용자에게 표현하고자 할 때, 이런 특정 단어에 토시를 붙이는 것을 자동화하기 위해서는 이것을 자동화하는 라이브러리가 필요하게 됩니다. 바로 이 프로젝트가 이런 경우에 필요한 것입니다.

이런 것을 해결하기 위해 만든 [토시캣 코어(TossiCat core)](https://github.com/tossicat/tossicat-core)를 파이썬에서 사용할 수 있도록 하는 것이 [PyO3](https://github.com/PyO3/pyo3)를 사용해 파이썬 라이브러리로 만드는 프로젝트인 [tossicat-python](https://github.com/tossicat/tossicat-python)입니다. 그 다음으로는 자바스크립트에서도 사용할 수 있게 [wasm-pack](https://rustwasm.github.io/docs/wasm-pack/introduction.html)을 이용해 WebAssembly로 컴파일한 패키지가 [tossicat for Web](https://www.npmjs.com/package/@dialektike/tossicat)입니다.

### 넘켓 프로젝트

현재는 초기 기획중입니다. 입력된 숫자를 한글로 바꾸는 작을 라이브러리가 될 것 같습니다. 숫자를 한글로 읽는 방법은 두 가지가 있습니다. 이 두 가지를 구현하고자 합니다.

Good luck out there, Rustacean! 🧑‍🚀
