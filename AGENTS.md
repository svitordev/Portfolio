# AGENTS.md — Vítor Silva | Portfolio

> **Fonte de verdade** para agentes de IA. Leia antes de qualquer alteração.

## 1. Sobre o Projeto

**Portfolio** é uma aplicação single-page de portfólio profissional para Vítor Silva (svitordev), desenvolvedor Full Stack.

**Objetivo:** Exibir habilidades, projetos e formas de contato.
**Deploy:** https://svitordev.vercel.app
**Repositório:** `https://github.com/svitordev/Portfolio.git`
**Branch:** `main`

## 2. Stack Tecnológica

| Camada | Tecnologia | Versão |
|---|---|---|
| Runtime | React | 18.3.1 |
| Linguagem | TypeScript | 5.2.2 |
| Build | Vite | 5.3.1 |
| Estilo | Tailwind CSS | 3.4.4 |
| Roteamento | react-router-dom | 6.26.0 |
| Animação | GSAP | 3.12.5 |
| i18n | i18next + react-i18next | 24.2.2 + 15.4.0 |
| Formulários | react-hook-form | 7.52.1 |
| Email | @emailjs/browser | 4.4.1 |
| Toast | react-toastify | 10.0.5 |
| Ícones | react-icons | 5.2.1 |
| Linting | ESLint | 8.57.0 |

## 3. Estrutura de Diretórios

```
Portfolio/
├── AGENTS.md                    ← Você está aqui
├── README.md                    ← README principal
├── PROJETO.md                   ← Visão do projeto em pt-BR
├── docs/
│   └── decision-log.md          ← Registro de decisões arquiteturais
├── memory-bank/                 ← Notas do projeto
│   ├── stack.md
│   ├── structure.md
│   ├── patterns.md
│   └── deploy.md
└── frontend/                    ← Aplicação React (único diretório de código)
    ├── index.html               ← HTML entry point
    ├── package.json             ← Dependências e scripts
    ├── tsconfig.json            ← TS composite config
    ├── vite.config.ts           ← Vite config
    ├── tailwind.config.js       ← Tailwind custom config
    ├── .eslintrc.cjs            ← ESLint config
    ├── .gitignore
    ├── public/
    │   ├── locales/
    │   │   ├── pt/translation.json   ← Traduções pt-BR
    │   │   └── en/translation.json   ← Traduções en
    │   └── vite.svg
    └── src/
        ├── main.tsx               ← Entry point React
        ├── App.tsx                ← Root + ThemeContext + Routes
        ├── i18n.ts                ← i18next config
        ├── index.css              ← Tailwind + fonts + custom styles
        ├── vite-env.d.ts          ← Vite env types
        ├── assets/
        │   ├── fonts/             ← OpenSansHebrew (Bold, BoldItalic)
        │   └── img/
        │       ├── projects/      ← (referências)
        │       └── structure/     ← Logo, MyPhoto, home illustrations
        ├── components/
        │   ├── BoxSociais/        ← Botão de rede social
        │   ├── ButtonCV/          ↓ Botão de download do CV
        │   ├── Links/             ← Link component do menu
        │   ├── Menu/              ← Menu desktop + mobile
        │   ├── Options/           ← Theme toggle + Language toggle
        │   ├── ProjectBox/        ← Card de projeto
        │   ├── Tags/              ← Tag de tecnologia
        │   └── TecGroup/          ← Grupo de tecnologias (marquee)
        ├── data/
        │   └── projects.ts        ← Dados estáticos dos projetos
        ├── hooks/
        │   ├── animation.tsx      ← Animações GSAP
        │   ├── resetAnimation.tsx ← Reset de animações
        │   └── useIntersectionObserver.tsx ← Hook scroll observer
        ├── pages/
        │   ├── PlusProjects/      ← Página /projects (lista expandida)
        │   └── PortMain/          ← Página / (seções principais)
        │       ├── index.tsx      ← Layout da página principal
        │       ├── Header.tsx     ← Header fixo + scroll-spy
        │       ├── Home.tsx       ← Hero section
        │       ├── Technologies.tsx ← Marquee de techs
        │       ├── AboutMe.tsx    ← Bio + foto + CV
        │       ├── Projects.tsx   ← Grid de projetos
        │       └── Contact.tsx    ← Formulário EmailJS + links
        └── types/
            └── i18next.d.ts       ← i18next type declarations
```

## 4. Comandos

```bash
cd frontend

# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento (localhost:5173)
npm run build        # Type-check (tsc -b) + produção (vite build)
npm run lint         # ESLint (exit code 1 se warnings > 0)
npm run preview      # Preview da build em produção
```

## 5. Arquitetura

### Routing
```
/                    → PortMain (single-page scroll layout)
/projects            → PlusProjects (lista expandida de projetos)
```

### Páginas (PortMain — seções em scroll)
1. **Header** fixo — Logo + menu + scroll-spy (active section highlight)
2. **Home** — Hero com texto + ilustração (dark/light) + redes sociais
3. **Technologies** — Marquee animado de tecnologias
4. **About Me** — Foto + bio + download CV
5. **Projects** — Grid com 4 projetos + link para ver todos
6. **Contact** — Formulário EmailJS + links diretos (Instagram, WhatsApp) + CV

### Theme System
- **Context API** (`ThemeContext` em `App.tsx`)
- Controla classe `dark`/`light` no `document.documentElement`
- **NÃO** usa `prefers-color-scheme` automaticamente — depende do usuário
- Ilustrações diferentes para cada tema (home.tsx)

### i18n System
- **Idiomas:** Português (`pt`) e Inglês (`en`)
- **Fallback:** `pt-br`
- **Detecção:** browser language detector (i18next)
- **Arquivos:** `public/locales/{pt,en}/translation.json`
- **Carregamento:** via HTTP (i18next-http-backend)
- **Debug:** `debug: true` em desenvolvimento

### Animate System
- **GSAP** para animações de entrada
- **Intersection Observer** para disparar animações ao scroll
- Hooks customizados: `useIntersectionObserver`, `Animation*`, `ResetAnimation*`
- Animações: slide from left/right/bottom com opacity 0→1

### Dados
- Projetos: **hardcoded** em `src/data/projects.ts` (array estático)
- Vídeos: hospedados no **Cloudflare R2**
- Traduções: **JSON estático** em `public/locales/`

### Formulário de Contato
- **react-hook-form** para validação e manejo
- **EmailJS** para envio (`service_foycaua` / `template_k0rrk97`)
- Public key hardcoded: `dhKybiheYpgMv58CS`

## 6. Decisões Arquiteturais

| Decisão | Justificativa |
|---|---|
| Vite em vez de CRA | Build mais rápida, HMR melhor, menos configuração |
| Context API em vez de Redux | Estado simples (theme), sem necessidade de store complexa |
| GSAP + Intersection Observer | Animações suaves e performáticas ao scroll |
| i18next para i18n | Padrão industry, detecção automática, loading dinâmico |
| Tailwind CSS | Utility-first, fácil dark mode, responsive |
| EmailJS | Sem backend necessário para formulário |
| Cloudflare R2 para vídeos | CDN gratuito, bom performance |
| TypeScript strict | Type safety, better DX, no unused vars |

## 7. Convenções de Código

- **PascalCase** para componentes React
- **camelCase** para functions, hooks, variáveis
- **Arquivos index.tsx** para exports de componentes
- **React.memo** em componentes que re-renderizam frequentemente (ProjectBox, Projects)
- **Refs tipados:** `useRef<HTMLElement | null>(null)`
- **i18n keys:** dot notation (ex: `t("home.devFS")`)
- **Imports:** relativos, sem path aliases

## 8. Fontes de Verdade

Prioridade para tomada de decisão:

1. código atual
2. configuração atual (tsconfig, tailwind, vite)
3. testes (futuro)
4. documentação do projeto
5. suposições

Código atual > documentação antiga.

## 9. Regras para Agentes

### Mudanças
1. Analisar o estado atual do código
2. Explicar o que foi encontrado
3. Propor plano mínimo
4. Implementar
5. Verificar com `git status` e `git diff`

### Não fazer sem aprovação:
- Mudar stack tecnológica
- Adicionar dependências
- Alterar comportamento funcional existente
- Modificar estilos visuais significativamente
- Criar novas seções na página principal

### Segurar:
- Token do EmailJS (`dhKybiheYpgMv58CS`) — exposição leve
- URLs do Cloudflare R2 — públicas por design
- PDFs do CV — públicos
- **NÃO** há JWT, passwords, ou secrets críticos

## 10. Deploy

- **Plataforma:** Vercel
- **URL:** https://svitordev.vercel.app
- **Repositório:** `https://github.com/svitordev/Portfolio`
- **Build command:** `cd frontend && npm run build`
- **Output directory:** `frontend/dist`

## 11. O que NÃO existe

- Backend (NestJS, Express, etc.)
- Banco de dados (PostgreSQL, MySQL, etc.)
- Testes automatizados (Jest, Vitest, RTL, Playwright)
- CI/CD (GitHub Actions, etc.)
- Autenticação (JWT, Session)
- Variáveis de ambiente (.env)
- CMS ou headless
