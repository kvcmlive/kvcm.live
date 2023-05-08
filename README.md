# Project Merri

The next generation of [kvcm.live](https://kvcm.live), featuring a new website, app, and CMS, and eventually more stuff. Powered by SvelteKit and Pocketbase.

## Development instructions

Make sure you've installed the dependencies with `yarn install`, as well as a fresh copy of Pocketbase in the root directory.

First, copy `template.env` into `.env` and fill it out. Then, start Pocketbase and the dev server.

Make sure to initialize the Pocketbase schema with the `pocketbase.json` file before trying to access the server.

```bash
./pocketbase serve
yarn run dev
```

## Building

To create a production version of your app:

```bash
yarn run build
```

You can preview the production build with `yarn run preview`.

Note that the Pocketbase server is still needed in production.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
