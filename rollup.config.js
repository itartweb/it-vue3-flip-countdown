import path from 'path'
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const plugins = [
  vue({
    css: false,
  }),
  resolve(),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env'],
  }),
  postcss({
    extract: path.resolve('dist/it-vue3-flip-countdown.css'),
    minimize: true,
    sourceMap: true,
  }),
]

export default {
  input: 'src/index.js',
  external: ['vue'],
  output: [
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'umd',
      exports: 'named',
      sourcemap: true,
      name: 'it-vue3-flip-countdown',
      globals: {
        vue: 'Vue',
      },
    },
    {
      file: pkg.unpkg,
      format: 'iife',
      exports: 'named',
      sourcemap: true,
      name: 'ItVue3FlipCountdown',
      globals: {
        vue: 'Vue',
      },
      plugins: [terser()],
    },
  ],
  plugins,
}
