import React, { useState } from "react";
const Profile = ({ data, setData, errors, setErrors }) => {
  const { name, email, age } = data;
  const handleChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
      </div>
      {errors.name && <span className="error">{errors.name}</span>}
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
      </div>
      {errors.age && <span className="error">{errors.age}</span>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
      {errors.email && <span className="error">{errors.email}</span>}
    </>
  );
};

export default Profile;
