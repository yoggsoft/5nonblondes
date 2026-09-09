import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**'],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      quotes: ['error', 'single'],
      indent: ['error', 2]
    }
  }
];

export default eslintConfig;
