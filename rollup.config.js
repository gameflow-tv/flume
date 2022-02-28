import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: './src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
  ],
  preserveModules: true
}
