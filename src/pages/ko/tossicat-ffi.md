---
title: TossiCat FFI
description: C/C++ 프로젝트에서 사용할 수 있는 한글 조사 변환 FFI 바인딩
layout: ../../layouts/MainLayout.astro
lang: ko
---

[TossiCat FFI](https://github.com/tossicat/tossicat-ffi)는 [TossiCat Core](https://github.com/tossicat/tossicat-core)의 C FFI 바인딩입니다. 게임 엔진(Unreal, Unity, Godot 등)이나 C/C++ 프로젝트에서 한국어 조사 변환 기능을 사용할 수 있게 해줍니다.

- **GitHub**: [tossicat/tossicat-ffi](https://github.com/tossicat/tossicat-ffi)
- **언어**: Rust, C

## 빌드

```bash
cargo build --release
```

빌드하면 다음 파일들이 생성됩니다:

| 파일 | 플랫폼 |
|------|--------|
| `include/tossicat.h` | C 헤더 파일 |
| `target/release/libtossicat_ffi.so` | Linux |
| `target/release/libtossicat_ffi.dylib` | macOS |
| `target/release/tossicat_ffi.dll` | Windows |

## API

| 함수 | 설명 |
|------|------|
| `tossicat_postfix(word, tossi)` | 단어에 토시를 붙여 반환 |
| `tossicat_modify_sentence(sentence)` | 문장 내 여러 토시를 일괄 변환 |
| `tossicat_guess_final_letter(word)` | 단어의 마지막 글자 종성 반환 |
| `tossicat_last_error()` | 마지막 에러 메시지 반환 (해제 불필요) |
| `tossicat_free(ptr)` | 반환된 문자열 메모리 해제 |

## C 언어 사용 예시

```c
#include "tossicat.h"
#include <stdio.h>

int main() {
    // 단어에 토시 붙이기
    char* result = tossicat_postfix("포션", "을");
    if (result) {
        printf("%s 획득했습니다!\n", result);  // "포션을 획득했습니다!"
        tossicat_free(result);
    }

    // 문장 단위로 변환하기
    char* sentence = tossicat_modify_sentence(
        "{철수, 은} {영희, 과} {밥, 를} 먹습니다."
    );
    if (sentence) {
        printf("%s\n", sentence);  // "철수는 영희와 밥을 먹습니다."
        tossicat_free(sentence);
    }

    return 0;
}
```

### 컴파일

```bash
gcc -o example example.c -L target/release -ltossicat_ffi
```

## 게임에서의 활용

한국어 게임에서 아이템명이나 캐릭터명에 따라 조사를 자동으로 붙일 수 있습니다.

```c
void show_item_message(const char* item_name) {
    char template[256];
    snprintf(template, sizeof(template),
        "{%s, 을} 획득했습니다!", item_name);

    char* message = tossicat_modify_sentence(template);
    if (message) {
        show_ui_text(message);
        tossicat_free(message);
    }
}

// show_item_message("포션");  → "포션을 획득했습니다!"
// show_item_message("검");    → "검을 획득했습니다!"
// show_item_message("마나");  → "마나를 획득했습니다!"
```

## 의존성 소스 선택

Cargo features를 통해 crates.io 안정 버전과 GitHub dev 브랜치 중 선택할 수 있습니다:

```bash
# crates.io 안정 버전 (기본값)
cargo build --release

# GitHub dev 브랜치 (최신 개발 버전)
cargo build --release --no-default-features --features source-github
```
