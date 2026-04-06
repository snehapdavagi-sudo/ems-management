import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import ViewEmployees from "./pages/ViewEmployees";
import EditEmployee from "./pages/EditEmployee";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/add"> Add Employee</Link>
      </nav>
<div className="top-buttons">
  <button onClick={() => window.location.href = "/add"}>
    Add Employee
  </button>

  <button onClick={() => window.location.href = "/"}>
    View Employees
  </button>
</div>
      <Routes>
        <Route path="/" element={<ViewEmployees />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;