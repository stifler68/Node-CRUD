const express = require("express");
require("express-async-errors");
router = express.Router();

const services = require("../services/employee.servives");

router.get("/", async (req, res) => {
  const employees = await services.getAllEmployees();

  res.send(employees);
  // res.send(`list of employee`);
});

router.get("/:id", async (req, res) => {
  const employee = await services.getEmployeesById(req.params.id);
  if (employee == undefined) {
    res.status(404).json("No record with given Id :" + req.params.id);
  } else {
    res.send(employee);
  }
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await services.deleteEmployee(req.params.id);

  if (affectedRows == 0) {
    res.status(404).json("No record with given Id :" + req.params.id);
  } else {
    res.send("User deleted Successfully ");
  }
});

router.post("/", async (req, res) => {
  await services.addOrEditEmployee(req.body);
  res.status(201).send("created Successfully");
});

router.put("/:id", async (req, res) => {
  const affectedRows = await services.addOrEditEmployee(
    req.body,
    req.params.id
  );
  if (affectedRows == 0) {
    res.status(404).json("No record with given Id :" + req.params.id);
  } else {
    res.send("User Updated Successfully ");
  }
});

module.exports = router;
