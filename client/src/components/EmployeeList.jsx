import React from "react";

const EmployeeList = ({ employees, onDelete }) => {
  if (employees.length === 0) {
    return <p className="text-gray-500">No employees found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Mobile</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Position</th>
            <th className="px-4 py-2 text-left">Salary</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp._id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="px-4 py-2">{emp.name}</td>
              <td className="px-4 py-2">{emp.mobile}</td>
              <td className="px-4 py-2">{emp.email}</td>
              <td className="px-4 py-2">{emp.position}</td>
              <td className="px-4 py-2">₹{emp.salary}</td>
              <td className="px-4 py-2 space-x-2">
                {/* For future: Add Edit functionality */}
                <button
                  onClick={() => onDelete(emp._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
