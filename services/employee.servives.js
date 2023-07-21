const db = require("../db");

module.exports.getAllEmployees = async () => {
  const [records] = await db.query("SELECT * FROM EMPLOYEES ");
  // const [temp] = await db.query("SELECT * FROM EMPLOYEES");
  // console.log(temp);
  return records;
};

module.exports.getEmployeesById = async (id) => {
  // const [record] = await db.query("SELECT * FROM EMPLOYEES Where id = " + id); // Sql injection
  const [[record]] = await db.query("SELECT * FROM EMPLOYEES Where id = ?", [
    id,
  ]);
  return record;
};

module.exports.deleteEmployee = async (id) => {
  const [{ affectedRows }] = await db.query(
    "DELETE  FROM EMPLOYEES Where id = ?",
    [id]
  );

  return affectedRows;

  //  second method
  //   console.log(record.affectedRows);
  //   return record.affectedRows;
};

module.exports.addOrEditEmployee = async (obj, id = 0) => {
  const [[[{ affectedRows }]]] = await db.query(
    "CALL usp_employee_add_or_edit (?,?,?,?)",
    [id, obj.name, obj.employee_code, obj.salary]
  );

  return affectedRows;
};
