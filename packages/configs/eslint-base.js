module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    'eslint:recommended',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    // ESLint typescript rules
    'plugin:@typescript-eslint/recommended',

    'airbnb-base',

    // add prettier to the last item of extends of each eslint config file
  ],

  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',

    'prettier',
  ],

  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',

    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'prefer-promise-reject-errors': 'off',

    quotes: ['warn', 'single', { avoidEscape: true }],

    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',

    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    '@typescript-eslint/no-var-requires': 'off',

    // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
    // does not work with type definitions
    'no-unused-vars': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // fix indent rule throwing error in VSCode
    // ref: https://github.com/eslint/eslint/issues/13956#issuecomment-751232188
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-underscore-dangle': 'off',
    'no-else-return': ['warn', { allowElseIf: true }],
    'consistent-return': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'ignore', ':': 'ignore' } }
    ],
    'implicit-arrow-linebreak': 'off',
    'linebreak-style': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '_', argsIgnorePattern: '_' },
    ],
  }
}
