
const participant = require("../database/models/participant");

exports.get = async (req, res) => {
    try {
        const getParticipants = await participant.findAll();
        res.send({getParticipants});
  } catch (err) {
        res.status(500).send({err});
  }
};

exports.delete = (req, res) => {
    try {
        participant.destroy({
            where: {
                id: req.body.participantId
            }
        }).then(() => {
            res.status(200).send({
                message: 'participant deleted successfully'
            });
        });
    } catch (err) {
        res.status(500).send({
            err
        });
    }
};