const Joi = require('joi');
const { participant: participantScheme } = require('./validSchemes');

exports.participantValid = (participant) => {
  // remove empty fields
  Object.keys(participant).forEach((key) => { if (participant[key] === '') delete participant[key]; });

  const { error } = Joi.validate(participant, participantScheme);
  if (error) {
    throw error;
  }
};
