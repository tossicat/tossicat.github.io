# TossiCat 홈페이지

[TossiCat 프로젝트](https://tossicat.github.io)의 홈페이지 소스입니다. 5개 하위 프로젝트를 소개합니다.

- [TossiCat Core](https://github.com/tossicat/tossicat-core) — Rust 핵심 라이브러리
- [TossiCat Web](https://github.com/tossicat/tossicat-web) — JavaScript/WebAssembly 패키지
- [TossiCat Python](https://github.com/tossicat/tossicat-python) — Python 바인딩
- [TossiCat FFI](https://github.com/tossicat/tossicat-ffi) — C FFI 바인딩
- [TossiCat CMD](https://github.com/tossicat/tossicat-cmd) — CLI 앱

## 개발

```bash
npm install
npm run dev       # 로컬 개발 서버 (localhost:4321)
```

## 빌드

```bash
npm run build     # dist/ 폴더에 빌드
npm run preview   # 빌드 결과 로컬 미리보기
```

## 배포

`main` 브랜치에 push하면 `.github/workflows/astro.yml` 워크플로우가 자동으로 빌드하고 GitHub Pages에 배포합니다.

```bash
git push origin main                # dialektike/tossicat
git push pages main                 # tossicat/tossicat.github.io → https://tossicat.github.io
```

## 페이지 추가/수정

페이지는 `src/pages/` 아래에 언어별(ko, en) Markdown 파일로 작성합니다. 사이드바는 `src/config.ts`의 `SIDEBAR`에서 관리합니다.
