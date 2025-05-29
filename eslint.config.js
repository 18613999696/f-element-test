import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  { files: ['src/**/*.{js,mjs,ts,mts,cts,vue}'], plugins: { js }, extends: ['js/recommended'], 
    rules: {
      // 强制 JavaScript 和 TypeScript 代码使用单引号
      'quotes': ['error', 'single'],
      // 强制使用分号结尾
      'semi': ['error', 'always'],
      // 强制使用一致的缩进
      'indent': ['error', 2],
      // 禁止使用 var 声明变量
      'no-var': 'error',
      // 对象最后一个属性后面强制使用逗号
      'comma-dangle': ['error', 'always-multiline'],
      'space-infix-ops': 'error',
      'comma-spacing': 'error',
      'space-before-function-paren': ['error', 'never'],
      'space-before-blocks': ['error', 'always'],
      // 强制圈复杂度限制 (10 是一个相对保守的阈值) 
      'complexity': ['error', 10],
      // 强制函数在排除注释和空行后最多 100 行
      'max-lines-per-function': ['error', 100],
      // 强制每行最多 80 个字符，排除注释和字符串
      'max-len': [
        'error',
        {
          code: 80,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
    },
  },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginVue.configs['flat/recommended'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
]);
