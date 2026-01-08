import fs from 'fs';

const config = `export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
`;

console.log('Restoring postcss.config.js...');
fs.writeFileSync('postcss.config.js', config);
