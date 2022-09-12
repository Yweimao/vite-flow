/*
 * @Author: yeweimao yeweimao@zhuanzhuan.com
 * @Date: 2022-09-12 12:16:10
 * @LastEditors: yeweimao yeweimao@zhuanzhuan.com
 * @LastEditTime: 2022-09-12 15:37:43
 * @FilePath: /vite-flow/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  env: {
    //针对哪些环境的语法
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    //集成了哪些规则, 别人写好的, 直接拿来用
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended", //ts规则
    "@vue/prettier"
  ],
  overrides: [],
  // 可以解析.vue文件
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@typescript-eslint/parser", // 解析ts文件的
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      // 自带的prettier规则
      "error",
      {
        singleQuote: false, //使用双引号
        semi: false, ////末尾添加分号  var a = 1
        tabWidth: 2, // tab * 2
        trailingComma: "none", // {a:1,}
        useTabs: false,
        endOfLine: "auto"
      }
    ]
  }
}
