#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const unzipper = require('unzipper');

const argv = require('minimist')(process.argv.slice(2));

if (argv._.length === 0 || argv.h || argv.help) {
  console.info('Usage: nunzip <zip file> [-d <output directory>]');
  return;
}

const file = argv._.[0];
if (!file.endsWith('.zip')) {
  file += '.zip';
}
const outdir = argv.d || path.resolve('.');

fs.createReadStream(file)
  .pipe(unzipper.Extract({path: outdir}));