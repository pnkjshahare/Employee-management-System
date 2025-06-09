import express from "express";
import {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

// GET all employees
router.get("/", getAllEmployees);

// POST a new employee
router.post("/", createEmployee);

// PUT update employee by ID
router.put("/:id", updateEmployee);

// DELETE employee by ID
router.delete("/:id", deleteEmployee);

export default router;
