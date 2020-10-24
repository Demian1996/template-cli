import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import pkg from '../package.json';
import common from './rollup.common';

export default [
  // ES
  {
    ...common,
    output: { file: `esm/${pkg.name}.js`, format: 'es', indent: false },
    plugins: [
      ...common.plugins,
      typescript({ useTsconfigDeclarationDir: true }),
      babel({
        extensions: ['.js', '.ts'],
      }),
    ],
  },
];
