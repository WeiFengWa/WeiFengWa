module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended'
    // "plugin:vue/vue3-essential"
  ],
  // "overrides": [
  //     {
  //         "env": {
  //             "node": true
  //         },
  //         "files": [
  //             ".eslintrc.{js,cjs}"
  //         ],
  //         "parserOptions": {
  //             "sourceType": "script"
  //         }
  //     }
  // ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  // "plugins": [
  //     "@typescript-eslint",
  //     "vue"
  // ],
  rules: {
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    // "vue/no-setup-props-destructure": "off",
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  globals: {
    defineProps: 'readonly'
  }
}
