# monorepo-template-base

株式会社YOSHINANIのモノレポテンプレートプロジェクトです。Turborepoを使用しており、Next.jsアプリケーションとshadcn/uiベースのUIコンポーネントライブラリを含んでいます。

## 🏗️ プロジェクト構造

```
monorepo-template-base/
├── apps/
│   └── web/          # Next.jsアプリケーション
├── packages/
│   └── ui/           # shadcn/uiベースのUIコンポーネントライブラリ
├── turbo.json        # Turborepo設定
├── pnpm-workspace.yaml # pnpm workspace設定
└── mise.toml         # mise設定（Node.js/pnpmバージョン管理）
```

## 🛠️ 技術スタック

- **Monorepo**: Turborepo
- **パッケージマネージャー**: pnpm
- **ランタイム管理**: mise
- **フレームワーク**: Next.js 16 (App Router)
  - cachedComponents: 有効化済み
  - reactCompiler: 有効化済み
- **UI**: React 19, shadcn/ui, Tailwind CSS 4
- **言語**: TypeScript 5.9
- **リンター**: ESLint
- **フォーマッター**: Biome
- **スタイルガイド**: @yoshinani/style-guide
- **テスト**: Vitest
- **CI/CD**: GitHub Actions

## 📋 要件

- Node.js >= 22
- pnpm 10.12.4
- mise (推奨: バージョン管理用)

## 🚀 セットアップ

### 1. リポジトリのクローン

```bash
git clone git@github.com:yoshinani-dev/monorepo-template-base.git
cd monorepo-template-base
```

### 2. 依存関係のインストール

miseを使用する場合（推奨）:

```bash
mise install
pnpm install
```

miseを使用しない場合:

```bash
# Node.js 22以上とpnpm 10.12.4を手動でインストール
pnpm install
```

### 3. VS Code拡張機能のインストール（推奨）

このプロジェクトで使用しているVS Codeの推奨拡張機能をインストールすることを推奨します:

- **Biome**: コードフォーマッター
- **Tailwind CSS IntelliSense**: Tailwind CSSの補完
- **ESLint**: コードの静的解析
- **dotenv**: 環境変数ファイルのシンタックスハイライト
- **Code Spell Checker**: スペルチェック
- **Vitest**: テストランナー

VS Codeでプロジェクトを開くと、推奨拡張機能のインストールを促すプロンプトが表示されます。手動でインストールする場合は、`Cmd+Shift+P`（Mac）または`Ctrl+Shift+P`（Windows/Linux）を押して「Extensions: Show Recommended Extensions」を実行してください。

## 💻 開発

### 開発サーバーの起動

すべてのアプリケーションの開発サーバーを起動:

```bash
pnpm dev
```

`apps/web`が `http://localhost:3000` で起動します。

### 個別のパッケージでの開発

特定のパッケージのみを開発する場合:

```bash
# webアプリのみ
pnpm --filter web dev

# UIパッケージのみ
pnpm --filter @repo/ui check-types
```

## 📜 利用可能なスクリプト

### ルートレベル

| スクリプト | 説明 |
|----------|------|
| `pnpm dev` | すべてのアプリケーションの開発サーバーを起動 |
| `pnpm build` | すべてのパッケージをビルド |
| `pnpm check` | リンターとフォーマッターを実行（修正なし） |
| `pnpm check:fix` | リンターとフォーマッターを実行（自動修正） |
| `pnpm check-types` | すべてのパッケージの型チェックを実行 |
| `pnpm lint` | ESLintを実行（自動修正） |
| `pnpm lint:ci` | ESLintを実行（CI用、修正なし） |
| `pnpm format` | Biomeでフォーマット（自動修正） |
| `pnpm format:ci` | Biomeでフォーマット（CI用、修正なし） |
| `pnpm test` | すべてのパッケージのテストを実行 |

### apps/web

| スクリプト | 説明 |
|----------|------|
| `pnpm --filter web dev` | 開発サーバーを起動（Turbopack使用） |
| `pnpm --filter web build` | プロダクションビルド |
| `pnpm --filter web start` | プロダクションサーバーを起動 |
| `pnpm --filter web test` | テストを実行 |

### packages/ui

| スクリプト | 説明 |
|----------|------|
| `pnpm --filter @repo/ui generate:component` | Reactコンポーネントを生成 |
| `pnpm --filter @repo/ui ui add <component>` | shadcn/uiコンポーネントを追加（例: `pnpm --filter @repo/ui ui add button`） |

## 🧪 テスト

```bash
# すべてのテストを実行
pnpm test

# 特定のパッケージのテスト
pnpm --filter web test
```

## 🏗️ ビルド

```bash
# すべてのパッケージをビルド
pnpm build

# 特定のパッケージをビルド
pnpm --filter web build
```

## 📦 パッケージの追加

### UIコンポーネントの追加

`packages/ui`でshadcn/uiコンポーネントを追加:

```bash
cd packages/ui
pnpm dlx shadcn@latest add button
# または
pnpm ui add button
```

複数のコンポーネントを一度に追加することもできます:

```bash
pnpm dlx shadcn@latest add button card dialog
```

### 新しいパッケージの追加

1. `packages/`または`apps/`ディレクトリに新しいパッケージを作成
2. `package.json`を作成
3. `pnpm-workspace.yaml`にパッケージが含まれていることを確認（デフォルトで`packages/*`と`apps/*`が含まれています）
4. ルートで`pnpm install`を実行

## 🔍 コード品質

このプロジェクトでは以下のツールを使用してコード品質を保証しています:

- **ESLint**: コードの静的解析（リンター）
- **Biome**: コードフォーマッター
- **TypeScript**: 型チェック

リンター・フォーマッターのルールセットには`@yoshinani/style-guide`を使用しています:

- **ESLint設定**:
  - `apps/web`: `@yoshinani/style-guide/eslint/next`
  - `packages/ui`: `@yoshinani/style-guide/eslint/react-internal`
- **Biome設定**: `@yoshinani/style-guide/biome`
- **TypeScript設定**:
  - `apps/web`: `@yoshinani/style-guide/typescript/nextjs`
  - `packages/ui`: `@yoshinani/style-guide/typescript/react-library`

### スペルチェック

このプロジェクトではCSpellのVS Code拡張機能を使用してスペルチェックを行っています。

#### 辞書の追加

`@yoshinani/style-guide`から提供される辞書を自動的に読み込みます。設定は`.vscode/cspell.json`で管理されています。

プロジェクト固有の単語を追加する場合は、`.vscode/cspell.json`の`words`配列に追加してください:

```json
{
  "words": ["yoshinani"]
}
```

または、VS Codeのクイックフィックス機能を使用して単語を追加することもできます:

1. スペルチェックでエラーが表示されている単語（例: yoshinani）にカーソルを合わせる
2. `Cmd + .`（Mac）または`Ctrl + .`（Windows/Linux）を押してクイックフィックスメニューを開く
3. 「Add: "yoshinani" to config: .vscode/cspell.json」を選択

これにより、単語が自動的に`.vscode/cspell.json`の`words`配列に追加されます。

### コードチェックの実行

`pnpm check`または`pnpm check:fix`を実行すると、以下のチェックが行われます:

- **ESLint**: コードの静的解析（リント）
- **Biome**: コードフォーマットとインポートソートのチェック

```bash
# すべてのチェックを実行（修正なし）
pnpm check

# 自動修正を適用
pnpm check:fix

# 型チェックのみ
pnpm check-types
```

## 🚢 CI/CD

GitHub Actionsを使用してCI/CDパイプラインが設定されています:

- **check**: リンター（ESLint）とフォーマッター（Biome）のチェック
- **type-check**: TypeScriptの型チェック

プッシュやプルリクエスト時に自動的に実行されます。

## 📚 関連ドキュメント

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [pnpm Documentation](https://pnpm.io/)
- [mise Documentation](https://mise.jdx.dev/)

## 📝 ライセンス

このプロジェクトのコードは公開されています。
