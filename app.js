const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  const date = new Date();
  const afterxdays = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${afterxdays.getDate()}/${
      afterxdays.getMonth() + 1
    }/${afterxdays.getFullYear()}`
  );
});
app.listen(3003);
module.exports = app;
