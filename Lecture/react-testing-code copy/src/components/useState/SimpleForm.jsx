import React, { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-red-300 py-2">
      <form className="flex gap-3 pb-2">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <div className="flex gap-5">
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
      </div>
    </div>
  );
}

export default SimpleForm;
