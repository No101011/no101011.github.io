# 玥空玹 · 个人主页

用 **MkDocs + Material** 构建的极简黑白个人主页。内容全是 Markdown，搜索、导航、暗色模式由 Material 提供，样式层只保留一套黑白灰设计语言。

- 线上地址：<https://no101011.github.io/>
- 仓库：<https://github.com/No101011/no101011.github.io>

## 本地开发

```bash
# 首次：建虚拟环境并装依赖
python -m venv .venv-mk
.venv-mk/Scripts/python.exe -m pip install mkdocs-material   # macOS/Linux 用 .venv-mk/bin/python
```

```bash
# 本地预览（热重载）：http://127.0.0.1:8000
.venv-mk/Scripts/python.exe -m mkdocs serve
```

```bash
# 只构建，输出到 site/
.venv-mk/Scripts/python.exe -m mkdocs build
```

## 目录结构

```
.
├── mkdocs.yml              # 站点配置：主题、导航、插件
├── docs/
│   ├── index.md            # 首页（Hero + 作品摘要 + CTA）
│   ├── work.md             # 作品详情
│   ├── about.md            # 关于我
│   ├── contact.md          # 联系
│   ├── stylesheets/
│   │   └── extra.css       # 全部自定义样式（黑白灰设计系统）
│   └── assets/
│       └── favicon.svg
└── site/                   # 构建产物（已 gitignore）
```

## 怎么改内容

| 想改什么 | 文件 |
| --- | --- |
| 首页标题、简介、状态 | `docs/index.md` 里的 `.kp-hero` 块 |
| 首页三张项目卡 | `docs/index.md` 里的 `.kp-cards`，改标题、描述、标签、链接 |
| 项目详情 | `docs/work.md`，一节一个项目，锚点 `{#atlas}` 之类 |
| 关于我、技术栈 | `docs/about.md` |
| 邮箱、社交链接 | `docs/contact.md` + 首页 CTA 里的 `mailto:` |
| 导航增删页面 | `mkdocs.yml` 的 `nav:`，同时新建对应 `.md` |
| 配色、字体、间距 | `docs/stylesheets/extra.css` 顶部的 `--kp-*` 变量 |

换主色只改这一处：

```css
:root {
  --kp-bg: #fbfbf9;      /* 背景 */
  --kp-fg: #12120f;      /* 主文字 / 主色 */
  --kp-muted: #74746c;   /* 次要文字 */
  --kp-line: rgba(18, 18, 15, 0.10);  /* 分割线 */
}
```

## 部署

```bash
.venv-mk/Scripts/python.exe -m mkdocs gh-deploy --force
```

它会把 `site/` 推到 `gh-pages` 分支，GitHub Pages 的源设置为该分支即可。
约 30–60 秒后生效，无需额外 CI。

## 设计约定

- **颜色**：只有黑白灰，绿点仅用于「可接新项目」状态
- **字号**：`clamp()` 控制，全站 4 档；标题 `letter-spacing: -0.045em`
- **间距**：8 的倍数，区块间距 `clamp(3.4rem, 8vw, 5.6rem)`
- **动效**：150–250ms，`cubic-bezier(.22,.61,.36,1)`；`prefers-reduced-motion` 下全量关闭
- **无障碍**：跳过导航、`:focus-visible` 描边、表格语义、WCAG AA 对比度

## 备注

Material for MkDocs 官方公告将在 **2027-05-05** 结束生命周期（安全修复到该日），
官方推荐的后继者是 [Zensical](https://zensical.org/)，迁移时 `mkdocs.yml` 基本可复用。
现在用着没问题，知道有这回事就行。

## 许可

MIT
