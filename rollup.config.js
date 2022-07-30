import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
// import vue from 'rollup-plugin-vue';
// import vue2 from 'rollup-plugin-vue2';
import commonjs from '@rollup/plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: './src/index.js',
  output: [
    { file: 'dist/vue-with-keep-alive.cjs.js' },
    // { file: "dist/index.cjs.min.js", plugins: [terser()] },
    { file: 'dist/vue-with-keep-alive.esm.js', format: 'esm' },
    { file: 'dist/vue-with-keep-alive.umd.js', format: 'umd', name: 'index' }
  ],
  plugins: [
    // vue({
    //   css: true,
    //   compileTemplate: true
    // }),
    eslint({}),
    // vue2({
    //   css: true,
    //   compileTemplate: true
    // }),
    babel({
      exclude: 'node_modules/**', // 排除node_modules所有文件
      runtimeHelpers: true,
      // 使用预设
      presets: [
        [
          '@babel/preset-env', {
            modules: false,
            // 目标浏览器
            targets: {
              edge: 17,
              firefox: 60,
              chrome: 67,
              safari: 11.1,
              ie: 9
            }
          }
        ]
      ],
      'plugins': [
        ['@babel/plugin-transform-runtime', {
          regenerator: true,
          absoluteRuntime: true,
          useESModules: false,
        }]
      ]
    }),
    resolve(),
    commonjs(),
    cleanup()
  ],
};
