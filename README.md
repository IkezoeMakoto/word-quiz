# [文字あてったー (word-quiz)](https://word-quiz.zoe.tools/)
[![CircleCI](https://circleci.com/gh/IkezoeMakoto/word-quiz.svg?style=svg)](https://circleci.com/gh/IkezoeMakoto/word-quiz)

## 文字あてったーとは
お題となる単語を ひらがななら「あ」、カタカナなら「ア」、漢字なら「漢」、ALPHABETなら「A」、alphabetなら「a」
のように変換したものを問題として出し、もとのお題を当てるというクイズです。

### 例1
* 問題
    * 漢漢漢漢あああ☆アアア
* 解答
    * 魔法少女まどか☆マギカ

### 例2
* 問題
    * 漢漢AaAAアアアアーア
* 解答
    * 横浜DeNAベイスターズ

----
以下開発者向け

## 環境構築
### 必要なもの
* Docker version 18.09.2
* docker-compose version 1.23.2

### 手順
* git clone git@github.com:IkezoeMakoto/word-quiz.git
* make up
    * 必要であれば、 `.env` を編集してください
