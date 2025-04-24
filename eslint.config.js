// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*']
  },

  /* for lint-staged */
  {
    globals: {
      __dirname: true
    },
    rules: {
      'no-console': 'error'
    }
  },

  /* plugins */
  {
    extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
    plugins: ['jest', 'testing-library']
  }
])
