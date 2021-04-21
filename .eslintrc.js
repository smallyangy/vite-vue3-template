module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        // "prettier/prettier": "error",
        // quotes: [1, "single"],
        // useTabs: false,
        // "tabWidth": 4,
        // 'import/extensions': [2, 'never', { 'web.js': 'never', json: 'never' }],
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        'import/no-unresolved': 0,
        'import/extensions': 0
    }
};
