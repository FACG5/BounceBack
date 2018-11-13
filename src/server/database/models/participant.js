const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const participant = sequelize.define("participant", {
  surename: {
    type: Sequelize.TEXT
  },
  forename: {
    type: Sequelize.TEXT
  },
  fullname: {
    type: Sequelize.TEXT
  },
  date_of_birth: {
    type: Sequelize.DATE
  },
  age: {
    type: Sequelize.INTEGER
  },
  address: {
    type: Sequelize.TEXT
  },
  gender: {
    type: Sequelize.TEXT
  },
  martial_status: {
    type: Sequelize.TEXT
  },
  sexual_orientatuin: {
    type: Sequelize.TEXT
  },
  ethincity: {
    type: Sequelize.TEXT
  },
  dependents: {
    type: Sequelize.TEXT
  },
  nationality: {
    type: Sequelize.TEXT
  },
  borough: {
    type: Sequelize.TEXT
  },
  postcode: {
    type: Sequelize.TEXT
  },
  mobile: {
    type: Sequelize.NUMBER
  },
  landline: {
    type: Sequelize.NUMBER
  },
  kin_contact: {
    type: Sequelize.NUMBER
  },
  email: {
    type: Sequelize.STRING
  },
  ni_number: {
    type: Sequelize.NUMBER
  },
  als: {
    type: Sequelize.NUMBER
  },
  cscs_number: {
    type: Sequelize.NUMBER
  },
  cscs_support: {
    type: Sequelize.NUMBER
  },
  case_worker: {
  type: Sequelize.STRING
  },
  leteracy_level: {
    type: Sequelize.INTEGER
  },
  numeracy_level: {
    type: Sequelize.INTEGER
  },
  disability_and_medical: {
    type: Sequelize.TEXT
  }
});

module.exports = participant;
