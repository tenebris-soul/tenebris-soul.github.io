const fs = require('node:fs');
const path = require('node:path');

const mode = process.argv[2];
const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const distIndexPath = path.join(root, 'dist', 'index.html');

const sourceIndex = `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Thesaurus - ассет-плагин для Unity 6 для создания виртуальных музеев без кода."
    />
    <title>Thesaurus | Unity 6 Virtual Museum Plugin</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

if (mode === 'source') {
  fs.writeFileSync(indexPath, sourceIndex, 'utf8');
  process.exit(0);
}

if (mode === 'pages') {
  const distIndex = fs.readFileSync(distIndexPath, 'utf8');
  fs.writeFileSync(indexPath, distIndex.replaceAll('./assets/', './dist/assets/'), 'utf8');
  process.exit(0);
}

console.error('Usage: node scripts/write-index.cjs <source|pages>');
process.exit(1);
