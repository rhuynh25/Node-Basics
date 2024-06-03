const express = require ('express');
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello this is my server");
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});

let employees = [];

fs.readFile("employees.json", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  employees = JSON.parse(data);
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/:id", (req, res) => {
  const employeeID = parseInt(req.params.id, 10);
  const employee = employees.find(employee => employee.employeeID === employeeID);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});
