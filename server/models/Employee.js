const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: String,
  name: String,
  email: String,
  phone: String,
  department: String,
  designation: String,
  salary: Number,
  joiningDate: String
});

module.exports = mongoose.model("Employee", employeeSchema);