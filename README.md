# wheather-news-app
## セットアップ方法
1. expoアプリのインストール
  スマホで以下のアプリをインストール<br>
  https://apps.apple.com/jp/app/expo-go/id982107779

2. nodeのバージョン統一
  nvm使ってnodeのバージョン揃えます。<br>
  ターミナルで以下を実行(mac,windows)<br>
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  ```

  ターミナルを再起動して以下を実行し`0.40.3`と出れば成功<br>
  windowsの場合はwslで実行<br>
  ```bash
  nvm -v
  ```

3. nodeのインストール
  以下を実行<br>
  ```bash
  nvm install
  ```
  実行したら以下を実行して`v22.13.0`と出れば成功
  ```bash
  nvm use
  node -v
  ```

4. 開発サーバー立ち上げ
  以下を実行して出てきたQRコードを読み取る
  ```bash
  cd src
  npm i
  npx expo start
  ```
  QRコードを読み取って失敗する場合、`npx expo start --tunnel`で実行

## 注意事項
ライブラリのインストールやnpm installをするときは必ず`node 22.13.0`を使用すること<br>


## 開発方法