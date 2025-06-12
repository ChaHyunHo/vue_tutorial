# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

<br/><br/>

타입스크립트와 자주 쓰는 생명주기 훅
```
훅                  사용 예시                                설명
onMounted          onMounted(() => { ... })               마운트 후

onBeforeUnmount    onBeforeUnmount(() => { ... })         해제 전

onUpdated          onUpdated(() => { ... })               DOM 갱신 후

onBeforeMount      onBeforeMount(() => { ... })           DOM 마운트 전

```
