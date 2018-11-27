const getStaff = require('./../helpers/getStaff');
const checkPassword = require('./../helpers/checkPassword');
const makeToken = require('./../helpers/makeToken');

exports.get = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { role, password: hasedPassword } = await getStaff(username);
    const isAuth = await checkPassword(password, hasedPassword);
    const token = await makeToken({ role, username, logging: true });
    if (isAuth) {
      res.cookie('jwt', token, { maxAge: 6048000000 });
      res.send(token);
    } else {
      res.send({ Error: 'Check Username Or Password' });
    }
  } catch (error) {
    res.send({ Error: 'There Is Error In Our Network' });
  }
};
