import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import pkg from '../package.json';
import common from './rollup.common';

export default [
  // CommonJS
  {
    ...common,
    output: { file: `lib/${pkg.name}.js`, format: 'cjs', indent: false },
    plugins: [
      ...common.plugins,
      typescript({ useTsconfigDeclarationDir: true }),
      babel({
        extensions: ['.js', '.ts'],
      }),
    ],
  },
];
