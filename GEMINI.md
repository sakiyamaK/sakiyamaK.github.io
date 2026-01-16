# Project: SakiyamaK Github IO

ユーザー（崎山圭）のポートフォリオサイト。
阿部寛の公式ホームページをオマージュした90年代風のデザインが特徴。

## Tech Stack
- React
- TypeScript
- Vite
- Vanilla CSS (`src/App.css`)

## Key Features
1. **90s Aesthetic**:
   - フレームレイアウト風のサイドバー
   - ビビッドな原色使い
   - MS Pゴシックフォント
   - 3D風のボーダー
2. **Fixed Layout**:
   - モバイルでもレスポンシブにならず、PC向けのレイアウト（幅1000px + サイドバー）を維持する。
   - `viewport` は `width=1200` 固定。
3. **Markdown Content Management**:
   - サイドバーメニュー: `public/menu.md`
   - 各ページコンテンツ: `public/content/*.md`
   - トップページの最新情報: `public/content/news.md`

## Build & Release
**重要: 自動デプロイは行わないこと。ユーザーの指示がある場合のみ手動で実行する。**

- Build: `make build` (Outputs to `docs/` for GitHub Pages)
- Deploy: `make release` (Builds, commits, and pushes to `main`)

## Directory Structure
- `src/`: React source code
- `public/`: Static assets and markdown content
- `docs/`: Build artifacts (Published via GitHub Pages)
