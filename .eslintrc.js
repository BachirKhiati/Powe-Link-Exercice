module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'strict-react/es6',
		'prettier',
		'prettier/react',
	],
	plugins: ['react', 'react-hooks'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		blarg: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/jsx-boolean-value': 0,
		'react/jsx-no-bind': 0,
		'react/forbid-component-props': 0,
		'react/prop-types': 0,
	},
};
