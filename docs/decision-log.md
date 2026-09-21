# docs/decision-log.md — Registro de Decisões Arquiteturais

> Registro de decisões técnicas tomadas durante o desenvolvimento do projeto.

## Decisões

### DEC-001: Vite em vez de Create React App
**Data:** Antes dos commits iniciais
**Status:** ✅ Implementada
**Motivo:** Build mais rápida, HMR melhor, menos configuração boilerplate.
**Alternativas consideradas:** CRA, Next.js, Remix.

### DEC-002: Context API em vez de Redux/Zustand
**Data:** Antes dos commits iniciais
**Status:** ✅ Implementada
**Motivo:** Estado simples (apenas tema) — não justifica a complexidade de Redux ou necessidade de Zustand.
**Alternativas consideradas:** Redux, Zustand, jotai.

### DEC-003: GSAP + Intersection Observer para animações
**Data:** Commit `61d7f9e` (atualizações de performance)
**Status:** ✅ Implementada
**Motivo:** GSAP oferece animações mais suaves que CSS transitions. Intersection Observer evita animações desnecessárias.
**Alternativas consideradas:** Framer Motion, CSS animations, AOS.

### DEC-004: i18next para internacionalização
**Data:** Commits `b058808`, `b20759c`
**Status:** ✅ Implementada
**Motivo:** Padrão industry, detecção automática de idioma, carregamento dinâmico de traduções.
**Alternativas consideradas:** react-i18next apenas, js-cookie translate, json-files.

### DEC-005: Tailwind CSS utility-first
**Data:** Antes dos commits iniciais
**Status:** ✅ Implementada
**Motivo:** Desenvolvimento rápido, fácil dark mode, responsive com breakpoints utilitários.
**Alternativas consideradas:** Styled Components, CSS Modules, SASS.

### DEC-006: EmailJS para formulário de contato
**Data:** Antes dos commits iniciais
**Status:** ✅ Implementada
**Motivo:** Sem necessidade de backend para enviar emails. Configuração simples com API key pública.
**Alternativas considered:** Formspree, custom API route, mailto: link.

### DEC-007: Cloudflare R2 para vídeos
**Data:** Antes dos commits iniciais
**Status:** ✅ Implementada
**Motivo:** CDN gratuito com boa performance. URLs diretas sem autenticação necessária.
**Alternativas consideradas:** YouTube embed, Vimeo, AWS S3 + CloudFront.

### DEC-008: TypeScript strict mode
**Data:** Antes dos commits iniciais
**Status:** ✅ Implementada
**Motivo:** Type safety, melhor DX, previne bugs em runtime.
**Alternativas consideradas:** JavaScript, TypeScript com `strict: false`.

### DEC-009: react-hook-form para formulários
**Data:** Antes dos commits iniciais
**Status:** ✅ Implementada
**Motivo:** Performático (menos re-renders), validação integrada, bom suporte a TypeScript.
**Alternativas consideradas:** Formik, React Final Form, HTML native forms.

### DEC-010: react-icons em vez de SVG inline
**Data:** Antes dos commits iniciais
**Status:** ✅ Implementada
**Motivo:** Conveniência, tree-shaking automático, mais de 20.000 ícones disponíveis.
**Alternativas consideradas:** SVG inline, Material Icons, Feather Icons.

### DEC-011: Single-page scroll layout em vez de múltiplas páginas
**Data:** Antes dos commits iniciais
**Status:** ✅ Implementada
**Motivo:** Portfolio é conteúdo estático — scroll é mais fluido e moderno que múltiplas páginas.
**Alternativas consideradas:** SPA com rotas dedicadas para cada seção, múltiplas páginas HTML.

### DEC-012: React.memo em componentes críticos
**Data:** Antes dos commits iniciais
**Status:** ✅ Implementada
**Motivo:** `ProjectBox` e `Projects` são re-renderizados frequentemente — memoização melhora performance.
**Alternativas consideradas:** `useMemo`, `useCallback`, sem otimização.

### DEC-013: Fontes customizadas via @font-face
**Data:** Antes dos commits iniciais
**Status:** ✅ Implementada
**Motivo:** Tipografia única (OpenSansHebrew Condensed) que diferencia o portfólio.
**Alternativas consideradas:** Google Fonts, system fonts, font-loading API.

## Histórico de Alterações

| Data | Decisão | Alterada por | Novo status |
|---|---|---|---|
| — | DEC-001 a DEC-013 | — | Todas implementadas |
