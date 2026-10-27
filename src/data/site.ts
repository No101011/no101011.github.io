export const site = {
  name: '玥空玹',
  title: '玥空玹 — 前端工程师',
  description: '把想法做成能用的界面。前端工程、界面设计、开源项目。',
  email: 'hello@example.com',
  github: 'https://github.com/No101011',
  repo: 'https://github.com/No101011/no101011.github.io',
  url: 'https://no101011.github.io',
};

export const nav = [
  { href: '/', label: '首页' },
  { href: '/work/', label: '作品' },
  { href: '/about/', label: '关于' },
  { href: '/contact/', label: '联系' },
];

export const projects = [
  {
    id: 'atlas',
    index: 'A1',
    year: '2026',
    title: '数据看板 · Atlas',
    desc: '面向运营的实时指标面板，深色优先，支持 12 种图表与自定义布局。',
    tags: ['React', 'TypeScript', 'D3'],
    specs: [
      ['角色', '前端负责人（2 人协作）'],
      ['技术', 'React · TypeScript · D3 · WebSocket'],
      ['规模', '42 个页面模块，首屏 1.2s'],
      ['结果', '运营日报制作时间从 40 分钟降到 5 分钟'],
    ],
    detail:
      '重写了图表渲染层，把 12 种图表统一到一套数据契约上；用 Web Worker 分担 5 万点级别的数据转换，主线程不再卡顿。',
  },
  {
    id: 'monochrome',
    index: 'A2',
    year: '2025',
    title: '设计系统 · Monochrome',
    desc: '一套只有黑白的组件库：48 个组件、完整的 token 与无障碍规范。',
    tags: ['Design Tokens', 'Vite', 'Storybook'],
    specs: [
      ['角色', '独立完成'],
      ['技术', 'Design Tokens · Vite · Storybook · Testing Library'],
      ['规模', '48 组件 / 3 个产品线接入'],
      ['结果', '新页面开发时间平均缩短 35%'],
    ],
    detail:
      '从灰度、间距、字号三个维度定义 token；用 WCAG AA 做对比度校验，所有组件都有键盘路径与 aria 说明。',
  },
  {
    id: 'draft',
    index: 'A3',
    year: '2025',
    title: '写作工具 · Draft',
    desc: '本地优先的 Markdown 编辑器，键盘驱动，冷启动 400ms 内。',
    tags: ['Rust', 'Tauri', 'CodeMirror'],
    specs: [
      ['角色', '独立开发'],
      ['技术', 'Rust · Tauri · CodeMirror 6'],
      ['规模', '桌面端，Windows / macOS'],
      ['结果', '安装包 8MB，冷启动 380ms'],
    ],
    detail:
      '把文档解析放在 Rust 侧，编辑区只处理 diff；快捷键覆盖全部高频操作，鼠标基本可以不用。',
  },
];

export const facts = [
  { label: '状态', value: '可接新项目', live: true },
  { label: '坐标', value: '中国 · 远程' },
  { label: '方向', value: 'React / TypeScript / 设计系统' },
];

export const skills = [
  ['语言', 'TypeScript · JavaScript · CSS'],
  ['框架', 'React · Vue · Astro'],
  ['样式', 'Tailwind · CSS Modules · PostCSS'],
  ['工程', 'Vite · pnpm · GitHub Actions'],
  ['设计', 'Figma · 设计 token · 无障碍'],
];
