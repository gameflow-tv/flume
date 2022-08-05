import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/react.ts', 'src/foundation.ts', 'src/tailwind.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  dts: true,
  target: 'node18',
  format: ['esm', 'cjs'],
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : '.js',
  }),
})
