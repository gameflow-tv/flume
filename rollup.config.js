import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import typescript from "@rollup/plugin-typescript"
import postcss from "rollup-plugin-postcss"

import pkg from "./package.json"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: "./src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript(),
        postcss()
    ]
}