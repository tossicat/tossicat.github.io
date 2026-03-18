---
title: TossiCat FFI
description: C FFI bindings for Korean postposition conversion in C/C++ projects
layout: ../../layouts/MainLayout.astro
lang: en
---

[TossiCat FFI](https://github.com/tossicat/tossicat-ffi) provides C FFI bindings for [TossiCat Core](https://github.com/tossicat/tossicat-core). It enables Korean postposition conversion in game engines (Unreal, Unity, Godot, etc.) and C/C++ projects.

- **GitHub**: [tossicat/tossicat-ffi](https://github.com/tossicat/tossicat-ffi)
- **Languages**: Rust, C

## Building

```bash
cargo build --release
```

This produces the following files:

| File | Platform |
|------|----------|
| `include/tossicat.h` | C header file |
| `target/release/libtossicat_ffi.so` | Linux |
| `target/release/libtossicat_ffi.dylib` | macOS |
| `target/release/tossicat_ffi.dll` | Windows |

## API

| Function | Description |
|----------|-------------|
| `tossicat_postfix(word, tossi)` | Attach postposition to word |
| `tossicat_modify_sentence(sentence)` | Batch convert postpositions in a sentence |
| `tossicat_guess_final_letter(word)` | Return the final consonant of a word |
| `tossicat_last_error()` | Return last error message (no free needed) |
| `tossicat_free(ptr)` | Free returned string memory |

## C Usage Example

```c
#include "tossicat.h"
#include <stdio.h>

int main() {
    // Attach postposition to a word
    char* result = tossicat_postfix("포션", "을");
    if (result) {
        printf("%s 획득했습니다!\n", result);  // "포션을 획득했습니다!"
        tossicat_free(result);
    }

    // Convert an entire sentence
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

### Compiling

```bash
gcc -o example example.c -L target/release -ltossicat_ffi
```

## Game Development Use Case

Automatically attach the correct postposition based on item or character names in Korean games.

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

## Dependency Source Selection

Choose between the stable crates.io version and the GitHub dev branch via Cargo features:

```bash
# Stable version from crates.io (default)
cargo build --release

# Latest dev branch from GitHub
cargo build --release --no-default-features --features source-github
```
