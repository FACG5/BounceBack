const { join } = require('path');
const { checkFiles } = require('./../helpers/checkFiles');

exports.download = async ({ params: { id } }, res) => {
  const CVsPath = join(__dirname, '..', 'CVs');
  try {
    const filename = await checkFiles(CVsPath, id);
    if (!filename) throw new TypeError('there is no files');
    res.set('filename', filename);
    res.download(join(CVsPath, filename), filename, err => (err && res.status(400).send('Can\'t Download The File Sorry')));
  } catch ({ message }) {
    res.status(400).send(message);
  }
};
