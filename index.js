const express = require("express");
const bodyparser = require("body-parser");

const db = require("./db");
const employeeRoutes = require("./controllers/employee.controller");

const app = express();

//middleware
app.use(bodyparser.json());

app.use("/api/employees", employeeRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Something went wrong! ");
});

db.query("select 1")
  .then(() => {
    console.log("Db connected successfully ");
    app.listen(3000, () => {
      console.log("Server started at 3000 ");
    });
  })
  .catch((err) => console.log("db connection failed \n" + err));
