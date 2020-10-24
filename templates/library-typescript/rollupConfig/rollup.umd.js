import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import pkg from '../package.json';
import common from './rollup.common';
import { terser } from 'rollup-plugin-terser';

export default [
  // UMD Development
  {
    ...common,
    output: {
      file: `dist/${pkg.name}.js`,
      format: 'umd',
      name: pkg.name,
      indent: false,
    },
    external: [],
    plugins: [
      ...common.plugins,
      typescript({ useTsconfigDeclarationDir: true }),
      babel({
        extensions: ['.js', '.ts'],
        exclude: 'node_modules/**',
      }),
    ],
  },

  // UMD Production
  {
    ...common,
    output: {
      file: `dist/${pkg.name}.min.js`,
      format: 'umd',
      name: pkg.name,
      indent: false,
    },
    external: [],
    plugins: [
      ...common.plugins,
      typescript({ useTsconfigDeclarationDir: true }),
      babel({
        extensions: ['.js', '.ts'],
        exclude: 'node_modules/**',
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      }),
    ],
  },
];
