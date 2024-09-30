#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const fflate = require('fflate');

(async() => {

const argv = require('minimist')(process.argv.slice(2));

if (argv._.length === 0 || argv.h || argv.help) {
  console.info('Usage: nunzip <zip file> [-d <output directory>]');
  return;
}

const archive = argv._[0];
if (!archive.endsWith('.zip')) {
  archive += '.zip';
}
const outdir = argv.d || path.resolve('.');

await new Promise((resolve, reject) => {
  let done = false;
  const unzip = new fflate.Unzip((file) => {
    if (file.name.endsWith('/') || file.name.endsWith('\\')) {
      fs.mkdirSync(path.join(outdir, file.name), {recursive: true});
      return;
    }
    console.log(file.name);
    const outfile = path.join(outdir, file.name);
    const writeStream = fs.createWriteStream(outfile);
    file.ondata = (err, chunk, final) => {
      if (err) {
        reject(err);
        return;
      }
      writeStream.write(chunk);
      if (final) {
        writeStream.end();
        console.log(outfile);
        if (done) {
          resolve();
        }
      }
    };
    file.start();
  });
  unzip.register(fflate.AsyncUnzipInflate);

  const inStream = fs.createReadStream(archive);
  inStream.on('data', (chunk) => unzip.push(chunk));
  inStream.on('end', () => {
    done = true;
    unzip.push(new Uint8Array(), true);
  });
});

})();
