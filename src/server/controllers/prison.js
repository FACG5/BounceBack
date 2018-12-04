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


// Get participant is prisoner or not
exports.getIfPrison = async (req, res) => {
  try {
    const { id } = req.params;
    const getPrisoner = await prison.findAndCountAll({
      row: true,
      where: {
        participant_id: id,
      },
    });
    res.send({ getPrisoner });
  } catch (err) {
    res.status(500).send({ err });
  }
};

// Editing for participant prison data
exports.editPrisonerDetails = async (req, res) => {
  try {
    const { prisonerData } = req.body;
    const prisonId = req.params.id;
    await prison.update(prisonerData, {
      where: {
        id: prisonId,
      },
    });
    res.send({ message: 'Editing data was done !' });
  } catch (error) {
    const { msg } = error;
    res.send({ error: msg });
  }
};
