#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const fflate = require('fflate');

const argv = require('minimist')(process.argv.slice(2));

if (argv._.length === 0 || argv.h || argv.help) {
  console.info('Usage: nunzip <zip file> [-d <output directory>]');
  return;
}

const file = argv._[0];
if (!file.endsWith('.zip')) {
  file += '.zip';
}
const outdir = argv.d || path.resolve('.');

const files = fflate.unzipSync(new Uint8Array(fs.readFileSync(file).buffer));

for (const name in files) {
  const outfile = path.join(outdir, name);
  fs.mkdirSync(path.dirname(outfile), {recursive: true});
  fs.writeFileSync(outfile, files[name]);
}
