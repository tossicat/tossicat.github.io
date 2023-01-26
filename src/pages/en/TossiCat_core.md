---
title: TossiCat core
description: TossiCat core
layout: ../../layouts/MainLayout.astro
---

이 프로젝트는 [tossi](https://github.com/what-studio/tossi)에서 영감을 받았습니다. 파이썬으로 구현된 앞의 **tossi**처럼 이 프로젝트도 임의의 단어와 그 단어에 붙일 조사(즉 토시)를 입력하면, 입력한 조사를 같이 입력한 단어에 자연스러운 형태로 바꿔서 반환해 줍니다.

변환할 토시가 여러개 들어 있는 문장도 아래와 같은 형식으로 입력하면,

`"{철수, 은} {영희,   과} {밥,  를} 먹습니다."`

다음과 같이 변경해 줍니다.

`"철수는 영희와 밥을 먹습니다."`

위와 같이 변환할 토시와 이를 붙일 단어를 쉽표(',')로 구분한 다음 이 두 개를 중괄호, '{, }'로 싸서 입력하시면 위와 같이 적절할 토시로 바꾼 후 이를 붙일 단어에 더해서 중괄호를 제거한 다음 문장에 넣어서 반환합니다.

## 사용법

사용하는 방법은 다음과 같습니다. 현재 프로젝트 안에 있는 `Cargo.toml` 파일에서 `[dependencies]` 다음에 `tossicat = "0.4.6"`을 다음과 같이 추가해 주세요.

## Apium haec candida mea movebo obsuntque descendat

Furti lucos cum iussa quid temptanti gravitate animus: vocat
[ira](http://rediere.com/): illa. Primis aeternus, illi cinguntur ad mugitus
aevo repentinos nec.

Transcurrere tenens in _litore_ tuti plebe circumspicit viventi quoque mox
troades medio mea locuta gradus perque sic unguibus
[gramen](http://quantoque.io/). Effetus celerique nomina quoque. Ire gemino est.
Eurus quaerenti: et lacus, tibi ignorant tertia omnes subscribi ducentem sedit
experientia sine ludunt multae. Ponderis memor purasque, ut armenta corpora
efferre: praeterea infantem in virgam verso.

- Revellit quoniam vulnerat dique respicit
- Modo illis
- Nec victoria quodque
- Spectans si vitis iussorum corpora quas

Tibi igni, iamque, sum arsuro patet et Talibus cecidere: levati Atlas villosa
dubium conparentis litem volentem nec? Iuga tenent, passi cumque generosior
luminis, quique mea aequora ingens bracchia furor, respiramen eram: in. Caelebs
et passu Phaethonta alumna orbem rapuit inplet [adfusaeque
oculis](http://www.virum.net/ille-miserae.html) paene. Casus mea cingebant idque
suis nymphe ut arae potuit et non, inmota erat foret, facta manu arvum.

Fugam nec stridentemque undis te solet mentemque Phrygibus fulvae adhuc quam
cernimus est! Aper iube dederat adsere iamque mortale ita cornua si fundamina
quem caperet, iubeas stolidae pedesque intrarunt navigat triformis. Undas terque
digitos satis in nautae sternuntur curam, iaculum ignoscere _pianda dominique
nostra_ vivacemque teneraque!
