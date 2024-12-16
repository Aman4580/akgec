import React, { useState } from 'react';
import axios from 'axios';


function RegisterForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setResponse('Form submitted successfully!');
    } catch (error) {
      setResponse('Failed to submit form.');
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default RegisterForm;
