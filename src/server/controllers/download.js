const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

exports.download = async ({ params: { id } }, res) => {
  const readDir = promisify(fs.readdir);
  const CVsPath = join(__dirname, '..', 'CVs');
  try {
    const files = await readDir(CVsPath);
    const filename = files.filter(file => file.split('.')[0] === id)[0];
    if (!filename) throw new Error('File Not Found');
    res.set('filename', filename);
    res.download(join(CVsPath, filename), filename, err => (err && res.status(400).send('Can\'t Download The File Sorry')));
  } catch (err) {
    res.status(400).send('There Is Not Files');
  }
};
