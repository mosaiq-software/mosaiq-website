import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{ts,tsx,astro}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            eqeqeq: 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
            '@typescript-eslint/no-empty-object-type': 'off',
        },
    },
    {
        ignores: ['.node_modules/*', 'dist/*', 'scripts/*', '*.cjs', 'public/*'],
    },
];
