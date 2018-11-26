const jwt = require('jsonwebtoken');

module.exports = ({ username, role, logging }) => new Promise((resovle, reject) => {
  jwt.sign({ username, role, logging }, process.env.SECRET, (err, result) => {
    if (err) reject(err);
    else resovle(result);
  });
});
