---
title: TossiCat Project
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

**Welcome to the TossiCat Project!**

This project was inspired by [tossi](https://github.com/what-studio/tossi). Like **tossi**, this project started with [TossiCat core](https://github.com/tossicat/tossicat-core), which takes an arbitrary word and a postposition (called "tossi" in Korean) as input, then transforms the postposition into a natural form that fits the given word. While **tossi** was written in Python, the **TossiCat Project** is fundamentally written in [Rust](https://www.rust-lang.org). Based on this Rust implementation, we also convert it so that it can be used in Python and JavaScript, creating separate packages for each programming language. See the list below:

- [tossicat for Web](https://www.npmjs.com/package/@dialektike/tossicat): Makes TossiCat core usable in JavaScript.
- [tossicat-python](https://github.com/tossicat/tossicat-python): Makes TossiCat core usable in Python.

This is the process our TossiCat Project aims to achieve. Currently, we only deal with Korean postposition (tossi) conversion, but we plan to write Korean-related libraries in Rust and make them available in various languages as shown above.

## About the Sub-projects

We primarily focus on Korean language-related features.

### TossiCat Core Project

As explained above, this project is centered around [TossiCat core](https://github.com/tossicat/tossicat-core), which takes a postposition (tossi) to attach to a word as input, transforms it into a natural form, and returns the result. Why is this feature necessary? In other words, why do we need to change the postposition for each word? Let's look at an example.

When attaching the object particle (을/를) to the word '사과' (apple), you must use '를' instead of '을'. This is because the object particle requires '를' when the preceding character has no final consonant (batchim), and '을' when it does. Of course, when attaching the particle '처럼' (like) to '사과', there's no need to consider such changes, because '처럼' can be attached to any word without variation. Thus, depending on the particle, there may or may not be a need to change its form.

While native Korean speakers can easily distinguish and handle these cases through their education, it's not so easy for foreigners. More importantly, when an application needs to compose sentences and present them to users, a library that automates attaching the correct postposition to specific words becomes necessary. This is exactly what this project provides.

The project [tossicat-python](https://github.com/tossicat/tossicat-python) makes [TossiCat core](https://github.com/tossicat/tossicat-core) available in Python using [PyO3](https://github.com/PyO3/pyo3). Additionally, [tossicat for Web](https://www.npmjs.com/package/@dialektike/tossicat) is a package compiled to WebAssembly using [wasm-pack](https://rustwasm.github.io/docs/wasm-pack/introduction.html) to make it usable in JavaScript.

### NumCat Project

Currently in early planning. It will be a small library that converts input numbers into Korean text. There are two ways to read numbers in Korean, and we aim to implement both.

Good luck out there, Rustacean! 🧑‍🚀
