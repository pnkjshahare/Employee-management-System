import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Employee name is required"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    position: {
      type: String,
      required: [true, "Position is required"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
