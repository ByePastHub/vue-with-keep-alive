import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
// import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.js",
  output: [
    { file: "dist/index.cjs.js" },
    // { file: "dist/index.cjs.min.js", plugins: [terser()] },
    { file: "dist/index.esm.js", format: "esm" },
    { file: "dist/index.umd.js", format: "umd", name: "index" }
  ],
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    babel({
      exclude: "node_modules/**", // 排除node_modules所有文件
    }),
    resolve(),
    commonjs()
  ],
};
