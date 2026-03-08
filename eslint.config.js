import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'
import prettierPlugin from 'eslint-plugin-prettier'; // 
import { defineConfig, globalIgnores } from 'eslint/config'


export default defineConfig([
  globalIgnores(['dist']),
  {
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
      prettier: prettierPlugin
    },
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    },

    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],

      'import/no-relative-parent-imports': 'off',
      'import/no-unresolved': 'error',
      'no-restricted-imports': ['warn', { patterns: ['../*'] }],
    }
  },
])
