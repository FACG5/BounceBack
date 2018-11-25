const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { jwt } = req.cookies;
  verify(jwt, process.env.SECRET, (err) => {
    if (err) {
      res.status(404).json('there is error , may be you have not permission to access');
    } else {
      next();
    }
  });
};
