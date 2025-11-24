import { FlatCompat } from '@eslint/eslintrc'
import expoConfig from 'eslint-config-expo/flat.js'
import { defineConfig } from 'eslint/config'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://docs.expo.dev/guides/using-eslint/

const compat = new FlatCompat({
  baseDirectory: __dirname
})

export default defineConfig([
  expoConfig,
  {
    ignores: ['dist/*']
  },

  /* for lint-staged */
  {
    languageOptions: {
      globals: {
        __dirname: true
      }
    },
    rules: {
      'no-console': 'error'
    }
  },

  /* plugins */
  ...compat.plugins('jest', 'testing-library'),

  /* extends */
  ...compat.extends('plugin:testing-library/react', 'plugin:jest-dom/recommended')
])
