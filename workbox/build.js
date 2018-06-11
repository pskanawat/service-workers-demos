const workboxBuild = require('workbox-build');

const buildSW = () => {
  return workboxBuild.injectManifest({
    swSrc: 'sw.js',
    swDest: 'src/sw.js',
    globDirectory: './src/',
    globPatterns: [
      '**\/*.{js,css,html}',
    ]
  }).then(({count, size, warnings}) => {
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
}

buildSW();