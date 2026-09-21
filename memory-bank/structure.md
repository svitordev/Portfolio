# memory-bank/structure.md — Estrutura de Arquivos

> Visão da estrutura de diretórios e responsabilidades. Atualizada em 2026-09-21.

## Root (`Portfolio/`)

| Arquivo | Responsabilidade |
|---|---|
| `AGENTS.md` | Fonte de verdade para agentes IA |
| `README.md` | README principal do projeto |
| `PROJETO.md` | Visão geral do projeto em pt-BR |
| `docs/decision-log.md` | Registro de decisões arquiteturais |
| `memory-bank/*.md` | Notas rápidas do projeto |
| `frontend/` | Aplicação React (único código) |

## Aplicação (`frontend/`)

### Root do Frontend

| Arquivo | Responsabilidade |
|---|---|
| `package.json` | Dependências e scripts |
| `tsconfig.json` | Config TS composite (references) |
| `tsconfig.app.json` | Compiler options (strict: true) |
| `tsconfig.node.json` | TS config para arquivos node |
| `vite.config.ts` | Vite plugins |
| `tailwind.config.js` | Tailwind custom config (dark mode, fonts, gradients) |
| `.eslintrc.cjs` | ESLint rules |
| `.gitignore` | Git ignore patterns |
| `index.html` | HTML entry point |

### `public/`

| Caminho | Responsabilidade |
|---|---|
| `locales/pt/translation.json` | Traduções português |
| `locales/en/translation.json` | Traduções inglês |

### `src/`

| Caminho | Responsabilidade |
|---|---|
| `main.tsx` | Entry point React |
| `App.tsx` | ThemeContext + Routes |
| `i18n.ts` | i18next init |
| `index.css` | Tailwind + font-face + custom styles |
| `vite-env.d.ts` | Vite env types |

### `src/components/`

| Componente | Responsabilidade |
|---|---|
| `BoxSociais/` | Botão de rede social |
| `ButtonCV/` | Botão de download CV |
| `Links/` | Link component do menu |
| `Menu/` | Menu desktop + mobile |
| `Options/` | Theme toggle + Language toggle |
| `ProjectBox/` | Card de projeto |
| `Tags/` | Tag de tecnologia |
| `TecGroup/` | Grupo de tecnologias (marquee) |

### `src/pages/`

| Página | Responsabilidade |
|---|---|
| `PlusProjects/` | Lista expandida de projetos |
| `PortMain/` | Layout principal com seções |

### `src/hooks/`

| Hook | Responsabilidade |
|---|---|
| `animation.tsx` | Animações GSAP (fromTo) |
| `resetAnimation.tsx` | Reset de animações |
| `useIntersectionObserver.tsx` | Hook scroll observer |

### `src/data/`

| Arquivo | Responsabilidade |
|---|---|
| `projects.ts` | Dados estáticos dos projetos |
