import React from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
    console.log(theme);
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="dark"
          onChange={handleChange}
          checked={theme === "dark"}
        />{" "}
        Dark
      </label>
      <label>
        <input
          type="radio"
          name="light"
          onChange={handleChange}
          checked={theme === "light"}
        />{" "}
        Light
      </label>
    </div>
  );
};

export default Settings;
