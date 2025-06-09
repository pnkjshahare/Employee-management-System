import React, { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import {
  getEmployees,
  createEmployee,
  deleteEmployee,
} from "../services/employeeService";

const HomePage = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (err) {
      console.error("Failed to fetch employees:", err);
    }
  };

  const handleAddEmployee = async (data) => {
    try {
      await createEmployee(data);
      fetchEmployees();
    } catch (err) {
      console.error("Failed to add employee:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployees();
    } catch (err) {
      console.error("Failed to delete employee:", err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      {/* Employee Form */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Add New Employee</h2>
        <EmployeeForm onSubmit={handleAddEmployee} />
      </div>

      {/* Employee List */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Employee List</h2>
        <EmployeeList employees={employees} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default HomePage;
