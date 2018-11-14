const participant = require('../../database/models/participant');

exports.get = async (req, res) => {
    try {
        const getParticipants = await participant.findAll();
        res.send({getParticipants});
  } catch (err) {
        res.status(500).send({err});
  }
};
