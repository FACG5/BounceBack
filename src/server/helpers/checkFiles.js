const { promisify } = require('util');
const fs = require('fs');

exports.checkFiles = async (CVsPath, id) => {
  try {
    const readDir = promisify(fs.readdir);
    const files = await readDir(CVsPath);
    const filename = files.filter(file => file.split('.')[0] === id)[0];
    if (!filename) return false;
    return filename;
  } catch (error) {
    return false;
  }
};
