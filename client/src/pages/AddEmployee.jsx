import API from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    employeeId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    joiningDate: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/employees", form);
      alert("Employee Added Successfully ✅");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error adding employee ❌");
    }
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <p style={{ textAlign: "center", color: "white" }}>
        Add Employee Details
      </p>

      <form onSubmit={handleSubmit} className="form-grid">

        <input
          type="text"
          placeholder="Employee ID"
          value={form.employeeId}
          onChange={(e) =>
            setForm({ ...form, employeeId: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Department"
          value={form.department}
          onChange={(e) =>
            setForm({ ...form, department: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Designation"
          value={form.designation}
          onChange={(e) =>
            setForm({ ...form, designation: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Salary"
          value={form.salary}
          onChange={(e) =>
            setForm({ ...form, salary: e.target.value })
          }
        />

        <input
          type="date"
          value={form.joiningDate}
          onChange={(e) =>
            setForm({ ...form, joiningDate: e.target.value })
          }
        />

        <button type="submit">Add Employee</button>

      </form>
    </div>
  );
}