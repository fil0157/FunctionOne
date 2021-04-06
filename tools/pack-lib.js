"use strict";


const shell = require('shelljs');



const LIB_DIR = `dist`;


const FILES = [
  `package.json`,
  `CHANGELOG.md`,
  `LICENSE.md`,
  `README.md`,
  `docs/`,
]


// shell.rm('dist/tsconfig.esm.tsbuildinfo')

shell.cp(`-Rf`, FILES, `${LIB_DIR}`);
