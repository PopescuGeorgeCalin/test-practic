module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    indent: ['error', 2],
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'operator-linebreak': ['error', 'after'],
    'jsx-a11y/label-has-associated-control': 'off',
    'react/prop-types': 'off',
  },
};
