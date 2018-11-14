const participant = require('../../database/models/participant');

exports.get = async (req, res) => {
    try {
        const participants = await participant.findAll();
        res.send({participants});
  } catch (err) {
        res.status(500).send({err});
  }
};
