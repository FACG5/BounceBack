const app = require("./app");
const port = app.get("port");
const { connection } = require("./database/models");

connection.sync({force:true}).then(() => {
  app.listen(port, () => console.log(`the server started on port ${port}`));
});
