import React, { useEffect, useState } from 'react';
import axios from 'axios';


function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setEmployees(res.data);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <div className="employee-card" key={employee.id}>
          <h3>{employee.name}</h3>
          <p>Email: {employee.email}</p>
          <p>Phone: {employee.phone}</p>
          <p>Address: {employee.address.city}, {employee.address.street}</p>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
