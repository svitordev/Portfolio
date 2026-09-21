# memory-bank/deploy.md — Deploy

> Informações de deploy do projeto. Atualizada em 2026-09-21.

## Deploy Atual

| Item | Valor |
|---|---|
| **Plataforma** | Vercel |
| **URL** | https://svitordev.vercel.app |
| **Repositório** | `https://github.com/svitordev/Portfolio` |
| **Branch** | `main` |
| **Build command** | `cd frontend && npm run build` |
| **Output directory** | `frontend/dist` |

## Recursos Externos

| Recurso | URL | Status |
|---|---|---|
| **CV Português** | https://svitordev.vercel.app/locales/pt/svitordev.pt.pdf | ✅ Público |
| **CV Inglês** | https://svitordev.vercel.app/locales/en/svitordev.en.pdf | ✅ Público |
| **Vídeos de projetos** | Cloudflare R2 (r2.dev) | ✅ Público |

## EmailJS

| Item | Valor |
|---|---|
| **Service ID** | `service_foycaua` |
| **Template ID** | `template_k0rrk97` |
| **Public Key** | `dhKybiheYpgMv58CS` |

## Deploy Manual

```bash
cd frontend
npm run build
# Upload do dist/ na Vercel
```

## Observações

- O deploy na Vercel provavelmente usa Git integration (push → deploy automático)
- Nenhum `.vercel` config file detectado
- Sem variáveis de ambiente necessárias
- Sem redirect rules configuradas
