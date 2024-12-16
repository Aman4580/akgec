import React from 'react';
import RegisterForm from './components/RegisterForm.js';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div>
      <h1>Register & Employee List</h1>
      <RegisterForm />
      <EmployeeList />
    </div>
  );
}

export default App;
