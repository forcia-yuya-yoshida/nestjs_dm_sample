## Dynamic Moduleを利用して環境変数でエンドポイントの実装を切り替えるサンプル
### 手順
- pnpm install
- cp .env.sample .env
- pnpm start:dev
- localhost:3456ポートで起動

### 環境変数の切り替え
- .envのCOOP変数を書き換えて再起動
  - アプリ上はCOOP=A, COOP=Bの2種類を用意

### 用意しているエンドポイント
- /
  - COOPによって実装が異なる
- /health
  - どのCOOPでも共通
- /something
  - COOP=Aの場合のみ出現
- /wowow
  - COOP=Bの場合のみ出現
- /document
  - openapi仕様を出力
  - COOPによって生成内容も変化する