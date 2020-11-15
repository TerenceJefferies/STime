module.exports = {
    'env': {
        'browser': true,
        'es2020': true,
        'node': true,
    },
    'extends': [
        'google',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 11,
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
    ],
    'rules': {
        'no-unused-vars': 'off',
        'indent': ['error', 4],
        'max-len': ['error', {'code': 120}],
    },
};
