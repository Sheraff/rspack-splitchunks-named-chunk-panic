# Rspack panic: splitChunks cache group named like a `webpackChunkName` chunk

`src/index.js` imports `./lazy.js` twice, once with `webpackChunkName: "named"` and once without. A cache group in
`rspack.config.mjs` has `name: 'named'`.

```sh
npm install
npm run build           # rspack 2.2.9: panics, exit code 134
npm run build:webpack   # webpack 5.112.2, same config: builds main.js + named.js
```

```
thread 'tokio-30' panicked at <redacted>:0:0:
Chunk(ChunkUkey(1, PhantomData<rspack_core::chunk::Chunk>)) not found in ChunkByUkey
Aborted
```

Controls that build: rename the cache group (`name: 'other'`), or remove the unnamed `import('./lazy.js')`.
