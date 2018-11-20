const jwt = require('jsonwebtoken');

module.exports = ({ username, role }) => new Promise((resovle, reject) => {
  jwt.sign({ username, role }, process.env.SECRET, (err, result) => {
    if (err) reject(err);
    else resovle(result);
  });
});
