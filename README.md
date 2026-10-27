# 玥空玹 · 个人主页

用 **Astro** 构建的极简黑白个人主页。纯静态输出，除少量交互脚本外没有运行时依赖。

- 线上地址：<https://no101011.github.io/>
- 仓库：<https://github.com/No101011/no101011.github.io>

## 本地开发

```bash
npm install      # 首次
npm run dev      # http://localhost:4321，热更新
npm run build    # 产物输出到 dist/
npm run preview  # 预览构建结果
```

## 目录结构

```
.
├── astro.config.mjs          # Astro 配置（site / 目录式路由）
├── package.json
├── src/
│   ├── data/site.ts          # 全站文案数据：导航、项目、技术栈、联系方式
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>、主题初始化、全局脚本
│   ├── components/
│   │   ├── Header.astro      # 顶栏 + 导航（含激活态）
│   │   ├── Footer.astro
│   │   └── ProjectCard.astro
│   ├── pages/
│   │   ├── index.astro       # 首页：Hero / 作品 / 关于摘要 / CTA
│   │   ├── work.astro        # 作品详情（锚点 #atlas 等）
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   └── styles/global.css     # 全部样式与设计 token
└── public/                   # 原样拷贝的静态资源
    ├── favicon.svg
    └── robots.txt
```

## 怎么改内容

文案集中在 `src/data/site.ts`，改这一个文件就能换掉大部分内容：

| 想改什么 | 位置 |
| --- | --- |
| 名字、邮箱、GitHub 链接 | `src/data/site.ts` 里的 `site` |
| 导航项 | 同文件的 `nav` |
| 三个项目（标题/描述/标签/规格表） | 同文件的 `projects` |
| 首页状态栏（可接新项目 / 坐标 / 方向） | 同文件的 `facts` |
| 技术栈表格 | 同文件的 `skills` |
| 首页大标题文案 | `src/pages/index.astro` |

换配色只改 `src/styles/global.css` 顶部：

```css
:root {
  --bg: #fbfbf9;      /* 背景 */
  --fg: #12120f;      /* 主文字 / 主色 */
  --muted: #74746c;   /* 次要文字 */
  --line: rgba(18, 18, 15, 0.10);  /* 分割线 */
}
```

`html { font-size: 90% }` 控制整体缩放，想更紧凑改成 `85%`。

## 部署

`git push` 到 `main` → GitHub Actions 跑 `npm ci && npm run build` →
`peaceiris/actions-gh-pages` 把 `dist/` 推到 `gh-pages` 分支 → Pages 自动发布。
约 1 分钟生效，不需要任何密钥。

GitHub Pages 的源设置为：**分支 `gh-pages` / 目录 `/`**。
（改这个设置要用 `PUT /repos/{owner}/{repo}/pages`，不是 PATCH。）

## 设计约定

- **颜色**：只有黑白灰，绿点仅用于「可接新项目」状态
- **字号**：`clamp()` 控制，全站 4 档；标题 `letter-spacing: -0.045em`
- **间距**：8 的倍数，区块间距 `clamp(3.2rem, 8vw, 5.4rem)`
- **动效**：150–250ms，`cubic-bezier(.22,.61,.36,1)`
  - 标题下划线扫入（`@keyframes sweep`）
  - 滚动淡入（IntersectionObserver，`.reveal`）
  - 昼夜切换一次性颜色过渡（`html.theme-anim`，700ms 后移除）
  - 翻页淡出 170ms + 落地淡入（`body.is-leaving` / `.page-in`）
- **无障碍**：跳过导航、`:focus-visible` 描边、`prefers-reduced-motion` 全量降级

## 历史版本

仓库历史里有前两版，需要对比或回滚可以直接 checkout：

- `dbcf421` — MkDocs + Material 版本
- `d02f4aa` — 手写 HTML / CSS / JS 版本

## 许可

MIT
