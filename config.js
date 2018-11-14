const dbConfig = () => {
      return {
        username: process.env.db_username,
        password: process.env.db_password,
        dbname: process.env.db_name,
        host: 'localhost',
        dialect: 'postgres',
      };
    };
  module.exports = {
    DB_CONFIG: dbConfig(process.env.NODE_ENV),
  };
  