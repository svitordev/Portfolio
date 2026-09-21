# frontend/README.md — Frontend

> Documentação específica do frontend. Leia para entender a aplicação.

## 1. Visão Geral

Aplicação React + TypeScript + Vite de portfólio profissional.

**Deploy:** https://svitordev.vercel.app

## 2. Scripts

```bash
npm run dev        # Inicia servidor de desenvolvimento (localhost:5173)
npm run build      # Type-check + build de produção
npm run lint       # ESLint (exit 1 se warnings > 0)
npm run preview    # Preview da build local
```

## 3. Configurações

### TypeScript
- **Strict mode:** true
- **Target:** ES2020
- **Module:** ESNext
- **Composite project** com 3 configs (root, app, node)
- **No path aliases** — usa imports relativos

### Tailwind CSS
- **Dark mode:** class-based (`dark` class no `html`)
- **Custom gradients:** `bg-custom-gradient`, `bg-custom-linear-gradient`
- **Custom fonts:** `font-condensed`, `font-condensedItalic`
- **Content:** `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`

### Vite
- **Plugin:** `@vitejs/plugin-react`
- **Sem proxy API** (SPA estático)
- **Sem path aliases**

### ESLint
- **Root:** true
- **Plugins:** `@typescript-eslint`, `react-hooks`, `react-refresh`, `json`
- **Rules:** `--max-warnings 0`, React hooks recommended
- **Ignores:** `dist`, `.eslintrc.cjs`

## 4. Arquitetura

### Pages
| Rota | Componente | Descrição |
|---|---|---|
| `/` | `PortMain` | Single-page com scroll sections |
| `/projects` | `PlusProjects` | Lista expandida de projetos |

### Components (responsabilidades)
| Componente | Responsabilidade |
|---|---|
| `Header` | Logo fixo + menu + scroll-spy |
| `Home` | Hero section com animações |
| `Technologies` | Marquee de tecnologias |
| `AboutMe` | Bio + foto + CV download |
| `Projects` | Grid de projetos |
| `Contact` | Formulário EmailJS + links |
| `ProjectBox` | Card de projeto |
| `Menu` / `MenuMobile` | Navegação desktop/mobile |
| `Options` | Theme toggle + Language toggle |

### State
- **Theme:** React Context
- **i18n:** i18next singleton
- **Form:** react-hook-form local state
- **Sem Redux/Zustand**

### Data
- **Projetos:** hardcoded em `src/data/projects.ts`
- **Traduções:** `public/locales/{pt,en}/translation.json`
- **Vídeos:** Cloudflare R2
- **CV:** PDFs no CDN

## 5. i18n

- **Idiomas:** pt (padrão), en (fallback pt-br)
- **Detecção:** browser language
- **Arquivos:** `public/locales/{pt,en}/translation.json`
- **Uso:** `t("key.nested")` via `useTranslation()` hook

## 6. Theme

- **Context:** `ThemeContext` (App.tsx)
- **Classes:** `dark` / `light` no `document.documentElement`
- **Toggle:** Options panel (floating)
- **Sem persistência** em localStorage

## 7. Dependências

### Runtime
| Pacote | Versão | Uso |
|---|---|---|
| react | 18.3.1 | UI framework |
| react-dom | 18.3.1 | ReactDOM |
| react-router-dom | 6.26.0 | Roteamento |
| gsap | 3.12.5 | Animações |
| i18next | 24.2.2 | Core i18n |
| react-i18next | 15.4.0 | React bindings |
| i18next-browser-languagedetector | 8.0.2 | Auto-detect lang |
| i18next-http-backend | 3.0.2 | Load translations |
| react-hook-form | 7.52.1 | Form handling |
| @emailjs/browser | 4.4.1 | Email sending |
| react-toastify | 10.0.5 | Notifications |
| react-icons | 5.2.1 | Icons |

### Dev Dependencies
| Pacote | Versão | Uso |
|---|---|---|
| typescript | 5.2.2 | Type checking |
| vite | 5.3.1 | Build tool |
| @vitejs/plugin-react | 4.3.1 | React plugin |
| tailwindcss | 3.4.4 | Utility CSS |
| postcss | 8.4.39 | CSS processing |
| autoprefixer | 10.4.19 | Vendor prefixes |
| eslint | 8.57.0 | Linter |
| @typescript-eslint/parser | 7.13.1 | TS parser |
| @typescript-eslint/eslint-plugin | 7.13.1 | TS rules |
| eslint-plugin-react-hooks | 4.6.2 | React hooks rules |
| eslint-plugin-react-refresh | 0.4.7 | Fast refresh |
| eslint-plugin-json | 4.0.1 | JSON linting |

## 8. Fontes

- **OpenSansHebrewCondensed-Bold** — `font-condensed`
- **OpenSansHebrewCondensed-BoldItalic** — `font-condensedItalic`
- **Local:** `src/assets/fonts/`

## 9. Observações

- Sem `.env` — sem variáveis de ambiente
- Sem testes automatizados
- Sem CI/CD
- Sem API proxy
- Sem service worker (não é PWA)-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
