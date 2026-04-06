const Employee = require("../models/Employee");

exports.createEmployee = async (req, res) => {
  const emp = new Employee(req.body);
  const saved = await emp.save();
  res.json(saved);
};

exports.getEmployees = async (req, res) => {
  const data = await Employee.find();
  res.json(data);
};

exports.updateEmployee = async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};