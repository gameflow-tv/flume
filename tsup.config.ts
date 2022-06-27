import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/foundation.ts', 'src/tailwind.ts'],
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
})
