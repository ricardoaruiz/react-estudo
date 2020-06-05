module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "jest",
  ],
  ignorePatterns: ["**/*test.tsx"],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "import/extensions": ["error", "never"],
    "import/no-unresolved": "off",
    "padded-blocks": "off",
  },
};
