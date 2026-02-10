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

## ディレクトリ、コンポーネントパターンについて。
```
components/
├── ui/           # frameなど全てで使える汎用的な部分。ビジネスロジックを持たない純粋なコンポーネント
|   |__ large-frame.tsx 
└── content/
    ├── large/    # largeフレーム内で表示するコンテンツ
    │   ├── weather-large.tsx
    |   |__ common-large.tsx # 共通化されている部分
    ├── middle/
    └── small/
```
`content`にはフレーム内で表示する天気の要素を配置します。<br>
`common-large.tsx`は湿度や降水量など、デザインが同等の要素を共通化しています。<br>
天気や服装提案などはデザインが異なるため、共通化しません。<br>
ただし、デザイン変更時に対応しにくく、`common-large`の影響範囲が大きいため、<br>
予期せぬレイアウト崩れが起こる可能性があります。これは現状の暫定的な設計です。