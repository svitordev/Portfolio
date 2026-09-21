# PROJETO.md — Portfolio Vítor Silva

> Visão geral do projeto em português. Leia para entender o propósito e contexto.

## 1. Propósito

Este projeto é um **portfólio profissional online** para **Vítor Silva** (svitordev), desenvolvedor Full Stack com 1 ano de experiência na área.

**Objetivo principal:** Apresentar habilidades técnicas, projetos realizados e formas de contato para potenciais clientes e empregadores.

**Público-alvo:**
- Empresas e recrutadores
- Clientes que buscam um desenvolvedor
- Outros desenvolvedores (comunidade)

## 2. Quem é Vítor Silva

Desenvolvedor Full Stack com:

- **1 ano de experiência** profissional na área
- **11 anos como músico** — desenvolve soft skills como disciplina, trabalho em equipe, criatividade, resiliência
- **Habilidades técnicas:** React, NextJS, ContextAPI, Redux, JavaScript, TypeScript, Tailwind CSS, MySQL, REST API, NodeJS

## 3. Problema que Resolve

Um portfólio profissional online resolve:

1. **Visibilidade** — Mostrar trabalho de forma acessível (24/7)
2. **Credibilidade** — Projetos reais com deploy funcionando
3. **Conversão** — Facilitar contato direto (formulário, WhatsApp, Instagram, LinkedIn)
4. **Profissionalismo** — Apresentação organizada e animada

## 4. Funcionalidades Implementadas

### ✅ Página Principal (`/`)

| Seção | Descrição |
|---|---|
| **Header** | Logo fixo + menu desktop/mobile + scroll-spy (highlight da seção ativa) |
| **Home** | Hero com texto, ilustração animada (dark/light), botões de redes sociais |
| **Technologies** | Marquee animado com as tecnologias dominadas |
| **About Me** | Foto pessoal, biografia, download do CV |
| **Projects** | Grid com 4 projetos em vídeo + link para página expandida |
| **Contact** | Formulário de contato (EmailJS), links diretos (Instagram, WhatsApp), download CV |

### ✅ Página de Projetos (`/projects`)

- Lista completa com **6 projetos** (4 da首页 + 2 extras)
- Cada projeto: vídeo, descrição, tecnologias, deploy, repositório GitHub

### ✅ Tema Dark/Light

- Alternância via botão flutuante
- Ilustrações e cores adaptadas para cada tema
- Persistência via React Context (não localStorage)

### ✅ Internacionalização

- **Português (pt)** — idioma padrão
- **Inglês (en)** — tradução completa
- Detecção automática do idioma do navegador
- Traduções em JSON estático

## 5. Projetos do Portfólio

### 1. ACS — Site Institucional
- **Cliente:** Associação Cultural Surubinense
- **Tech:** HTML5, CSS3, JavaScript
- **Deploy:** https://acs.art.br
- **Descrição:** Site institucional para divulgar cultura e história de Surubim-PE

### 2. SoftPet — Sistema PetShop
- **Tech:** NextJS, React, JavaScript, CSS, Zod, Toastify, NodeJS, Axios, Express, MySQL
- **Deploy:** (sem link público)
- **Descrição:** Sistema de gerenciamento de petshop com cadastro de clientes, animais, serviços e relatórios

### 3. Catálogo de Produtos
- **Tech:** Vite, React, Redux, JavaScript, Tailwind CSS
- **Deploy:** https://catalogo-two.vercel.app/
- **Descrição:** Catálogo com carrinho de compras e pedido via WhatsApp

### 4. Cadastro de Usuários — Fusion
- **Tech:** Vite, React, JavaScript, Tailwind CSS, Zod, React Hook Form, React Router, Toastify
- **Deploy:** https://desafio-formulario-com-validacao-frontend.vercel.app/
- **GitHub:** https://github.com/svitordev/desafio-formulario-com-validacao-frontend

### 5. Fusion Galeria
- **Tech:** Vite, React, JavaScript, Tailwind CSS, Redux/Toolkit, React Router, GSAP
- **Deploy:** https://desafio-galeria-de-imagem-frontendfusion-delta.vercel.app/
- **GitHub:** https://github.com/svitordev/desafio-galeria-de-imagem-frontendfusion

### 6. Calculadora de Investimentos
- **Tech:** Vite, React, JavaScript, Tailwind CSS, ChartJS
- **Deploy:** https://calculadora-investimento-coral.vercel.app/
- **GitHub:** https://github.com/svitordev/CalculadoraInvestimento

## 6. Regras de Negócio

| Regra | Descrição |
|---|---|
| **Projetos hardcoded** | Dados dos projetos estão em `src/data/projects.ts`, não em API |
| **Vídeos em R2** | Todos os vídeos de demonstração são hospedados no Cloudflare R2 |
| **EmailJS** | Formulário usa EmailJS — não há backend para processar emails |
| **CV condicional** | CV é baixado condicionalmente baseado no idioma do portfólio |
| **Scroll-spy** | Menu highlight baseado na seção visível no viewport |
| **Animação no scroll** | Animações disparam quando elementos entram no viewport via Intersection Observer |

## 7. Status do Projeto

| Componente | Status |
|---|---|
| Frontend | ✅ Completo |
| Tema Dark/Light | ✅ Funcional |
| i18n (pt/en) | ✅ Funcional |
| Formulário de Contato | ✅ Funcional |
| Animações | ✅ Funcional |
| Responsividade | ✅ Funcional |
| Backend | ❌ Não existe |
| Banco de Dados | ❌ Não existe |
| Autenticação | ❌ Não existe |
| Testes | ❌ Não existe |
| CI/CD | ❌ Não existe |
| CMS | ❌ Não existe |

## 8. Roadmap Sugerido

### Curto Prazo
- [ ] Adicionar testes unitários (Vitest + RTL)
- [ ] Implementar `tsconfig` path aliases (`@/`)
- [ ] Otimizar bundle (React.lazy, dynamic imports)
- [ ] Remover `debug: true` do i18next em produção
- [ ] Adicionar Error Boundary

### Médio Prazo
- [ ] Criar backend (NestJS) com projetos dinâmicos
- [ ] Adicionar CMS headless para gerenciar projetos
- [ ] Implementar SEO meta tags (react-helmet)
- [ ] Adicionar analytics (Google Analytics)
- [ ] Suporte a PWA (service worker)

### Longo Prazo
- [ ] Sistema de blog integrado
- [ ] Área administrativa com autenticação
- [ ] Sistema de comentários nos projetos
- [ ] Multi-idioma expandido (espanhol, etc.)
