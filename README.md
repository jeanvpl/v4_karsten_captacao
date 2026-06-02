# LP V4 Karsten Captação

Landing page de captação desenvolvida com React + Vite + TanStack Start.

## Requisitos

- Node.js 20+
- npm 10+

## Instalação

```bash
npm install
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

## Estrutura principal

- `src/routes/index.tsx`: página principal da landing
- `src/components/landing/*`: seções e componentes visuais da página
- `src/assets/landing/*`: imagens e assets da landing
- `src/server.ts`: entrada de servidor para SSR/error fallback
- `vite.config.ts`: configuração do build

## Deploy na Vercel

### Opção recomendada (site estático)

Use estas configurações no projeto da Vercel:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: `dist/client`

### Publicação

1. Suba este repositório no GitHub.
2. No painel da Vercel, clique em **Add New Project**.
3. Importe o repositório.
4. Confirme as configurações acima.
5. Clique em **Deploy**.

## Checklist rápido antes do deploy

- `npm run lint` sem erros
- `npm run build` concluindo com sucesso
- Assets carregando corretamente na página

## Licença

Projeto privado para uso interno.
