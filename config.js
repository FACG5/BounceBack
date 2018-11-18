const dbConfig = env => {
  if (env === "development") {
    return {
      username: process.env.db_username,
      password: process.env.db_password,
      dbname: process.env.db_name,
      host: "localhost",
      dialect: "postgres"
    };
  } else if (env === "production") {
    return {
      database: process.env.DB_PRODUCTION_URL,
      username: process.env.PRODUCTION_DB_USERNAME,
      password: process.env.PRODUCTION_DB_PASSWORD,
      host: process.env.PRODUCTION_DB_HOST,
      dbname: process.env.PRODUCTION_DB_NAME,
      dialect: process.env.PRODUCTION_DB_DIALECT
    };
  }
};
module.exports = {
  DB_CONFIG: dbConfig(process.env.NODE_ENV)
};
