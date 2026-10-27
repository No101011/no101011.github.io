---
hide:
  - navigation
---

# 精选作品

三件占位项目，替换成你自己的即可。下面的结构可以直接复用：一句话定位 → 做了什么 → 结果。

---

## 数据看板 · Atlas { #atlas }

面向运营团队的实时指标面板。深色优先，支持 12 种图表类型与自定义布局。

| 项 | 内容 |
| --- | --- |
| 角色 | 前端负责人（2 人协作） |
| 技术 | React · TypeScript · D3 · WebSocket |
| 规模 | 42 个页面模块，首屏 1.2s |
| 结果 | 运营日报制作时间从 40 分钟降到 5 分钟 |

**做的事**：重写了图表渲染层，把 12 种图表统一到一套数据契约上；
用 Web Worker 分担 5 万点级别的数据转换，主线程不再卡顿。

---

## 设计系统 · Monochrome { #monochrome }

一套只有黑白的组件库，48 个组件、完整的 design token 与无障碍规范。

| 项 | 内容 |
| --- | --- |
| 角色 | 独立完成 |
| 技术 | Design Tokens · Vite · Storybook · Testing Library |
| 规模 | 48 组件 / 3 个产品线接入 |
| 结果 | 新页面开发时间平均缩短 35% |

**做的事**：从灰度、间距、字号三个维度定义 token；
用 WCAG AA 做对比度校验，所有组件都有键盘路径与 aria 说明。

---

## 写作工具 · Draft { #draft }

本地优先的 Markdown 编辑器，键盘驱动，冷启动 400ms 内。

| 项 | 内容 |
| --- | --- |
| 角色 | 独立开发 |
| 技术 | Rust · Tauri · CodeMirror 6 |
| 规模 | 桌面端，Windows / macOS |
| 结果 | 安装包 8MB，冷启动 380ms |

**做的事**：把文档解析放在 Rust 侧，编辑区只处理 diff；
快捷键覆盖全部高频操作，鼠标基本可以不用。

---

[:material-arrow-left: 回到首页](index.md){ .md-button }
