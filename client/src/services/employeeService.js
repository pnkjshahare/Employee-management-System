import axios from "axios";

// Base URL for the backend API
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/employees";

// 📥 GET all employees
export const getEmployees = () => axios.get(API_BASE_URL);

// ➕ POST: create a new employee
export const createEmployee = (employeeData) =>
  axios.post(API_BASE_URL, employeeData);

// ❌ DELETE: remove employee by ID
export const deleteEmployee = (id) => axios.delete(`${API_BASE_URL}/${id}`);

// ✏️ PUT: update employee by ID
export const updateEmployee = (id, updatedData) =>
  axios.put(`${API_BASE_URL}/${id}`, updatedData);
