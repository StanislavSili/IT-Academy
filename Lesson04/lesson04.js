const fs = require('fs');
const fse = require('fs-extra');

fse.mkdirp('./testfolder');
fse.emptyDirSync('/testfolder/text.txt');
fse.createFileSync('./testfolder/text.txt');
fse.emptyDirSync('./testfolder2');
fse.moveSync('./testfolder/text.txt', './testfolder2/text.txt');
fse.emptyDirSync('./testfolder3');
fse.moveSync('./testfolder2/text.txt', './testfolder3/text.txt');
fse.removeSync('./testfolder');
fse.removeSync('./testfolder2');
fse.removeSync('./testfolder3');
