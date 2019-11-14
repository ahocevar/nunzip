#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const unzipper = require('unzipper');

const opt = require('node-getopt').create([
  ['d', '=', 'directory to extract to', path.resolve('.')]
])
  .setHelp('Usage: nunzip file[.zip] [OPTIONS]\n[[OPTIONS]]')
  .bindHelp()
  .parseSystem();

if (opt.argv.length === 0) {
  throw new Error('Missing file. Use \'nunzip -h\' for help.');
}
const file = opt.argv[0];
if (!file.endsWith('.zip')) {
  file += '.zip';
}
const outdir = opt.options['d'];

fs.createReadStream(file)
  .pipe(unzipper.Extract({path: outdir}));