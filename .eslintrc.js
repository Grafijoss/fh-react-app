module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  overrides: [
    {
      files: ['*.ts?(x)', '**/*.ts?(x)'],
      extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
      ],
      overrides: [],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      },
      plugins: [
        'react',
        'prettier',
        'jsx-a11y',
        'react-hooks',
        '@typescript-eslint'
      ],
      rules: {
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': 'error'
    // "trailingComma": "none"
  }
}
