const eslintConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfigs/tsconfig.dev.json'],
  },

  plugins: ['@typescript-eslint', 'testing-library', 'jest-dom', 'jest', 'import'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:no-array-reduce/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:storybook/recommended',
  ],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    'prefer-template': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'spaced-comment': 'error',
    'id-length': ['error', { min: 2 }],

    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',

    'jsx-a11y/anchor-is-valid': ['off'],

    'jest/valid-title': [
      'error',
      {
        mustMatch: {
          it: [/should.*when/u.source, "Test title must include 'should' and 'when'"],
        },
      },
    ],

    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },

  overrides: [
    {
      files: ['ProcessEnv.d.ts'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
      },
    },
    {
      files: ['src/pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],

  // ESlint default behaviour ignores file/folders starting with "." - https://github.com/eslint/eslint/issues/10341
  ignorePatterns: ['!.*', '.next', 'compiled', 'node_modules'],

  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};

module.exports = eslintConfig;
