# 玥空玹 · 个人主页

极简黑白风格的个人作品集，纯 HTML + CSS + 原生 JS，无构建步骤、无外部依赖，可直接托管在 GitHub Pages。

## 本地预览

直接双击 `index.html` 即可。或者起一个本地服务器：

```bash
python -m http.server 8080
# 打开 http://localhost:8080
```

调试用参数：`index.html?theme=light` / `?theme=dark` 可以强制指定主题。

## 目录结构

```
.
├── index.html    # 页面结构（所有文案都在这里）
├── styles.css    # 全部样式与设计 token
├── script.js     # 主题切换、滚动显现、年份
└── README.md
```

## 怎么改成你自己的

所有文案都在 `index.html` 里，按注释找：

| 想改什么 | 位置 |
| --- | --- |
| 名字、标题、简介 | `<section class="hero">` 里的 `.hero-title`、`.hero-lead` |
| 三个项目 | `<section id="work">` 里的三张 `.card` |
| 关于我、技术栈 | `<section id="about">` |
| 邮箱、社交链接 | `<section id="contact">` 里的 `.mailto` 和 `.links` |
| 状态（可接新项目等） | `.hero-facts` |

换配色只改 `styles.css` 顶部的 `:root` 与 `[data-theme="dark"]` 变量：

```css
:root {
  --bg: #fbfbf9;      /* 背景 */
  --fg: #12120f;      /* 主文字 */
  --muted: #74746c;   /* 次要文字 */
  --line: rgba(18, 18, 15, 0.10);  /* 分割线 */
}
```

## 设计约定

- **字号阶梯**：`clamp()` 控制，桌面 5.4rem → 移动 2.7rem，全站只有 4 档
- **间距**：统一用 8 的倍数，section 间距 `clamp(88px, 11vw, 152px)`
- **颜色**：只有黑白灰，没有彩色（绿色只用在“可接新项目”的状态点）
- **动效**：150–250ms、`cubic-bezier(.22,.61,.36,1)`，滚动只淡入一次
- **无障碍**：`prefers-reduced-motion` 全量降级、`:focus-visible` 描边、跳过导航链接

## 部署到 GitHub Pages

1. 把本目录推到仓库（推荐仓库名 `<你的用户名>.github.io`，这样地址就是 `https://<用户名>.github.io`）
2. 仓库 **Settings → Pages** → Source 选 `Deploy from a branch` → 分支 `main`、目录 `/ (root)` → Save
3. 等 1 分钟左右，访问 `https://<用户名>.github.io`

改完代码后 `git push` 即可，Pages 会自动重新发布。

## 许可

MIT
