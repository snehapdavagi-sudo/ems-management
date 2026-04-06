import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function EditEmployee() {
  const { id } = useParams();
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

  useEffect(() => {
    API.get("/employees").then((res) => {
      const emp = res.data.find((e) => e._id === id);
      if (emp) setForm(emp);
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await API.put(`/employees/${id}`, form);
    alert("Updated");
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Employee</h2>

      <form onSubmit={handleUpdate}>

        <input value={form.employeeId}
          onChange={(e) => setForm({...form, employeeId: e.target.value})} />

        <input value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})} />

        <input value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})} />

        <input value={form.phone}
          onChange={(e) => setForm({...form, phone: e.target.value})} />

        <input value={form.department}
          onChange={(e) => setForm({...form, department: e.target.value})} />

        <input value={form.designation}
          onChange={(e) => setForm({...form, designation: e.target.value})} />

        <input value={form.salary}
          onChange={(e) => setForm({...form, salary: e.target.value})} />

        <input type="date"
          value={form.joiningDate}
          onChange={(e) => setForm({...form, joiningDate: e.target.value})} />

        <button type="submit">Update</button>

      </form>
    </div>
  );
}