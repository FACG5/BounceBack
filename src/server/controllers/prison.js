const prison = require('../database/models/prison');

exports.post = async (req, res) => {
  try {
    const { prisonDetails } = req.body;
    const participantId = req.params.id;
    prisonDetails.participant_id = participantId;
    await prison.create(prisonDetails);
    res.send({ message: 'Adding a Prison Details Was Done !' });
  } catch (error) {
    const { message } = error;
    res.send({ error: message });
  }
};
