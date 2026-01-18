import React from "react";

const Interests = ({ data, setData, errors, setErrors }) => {
  const { interests } = data;
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            onChange={handleChange}
            checked={interests.includes("coding")}
          />{" "}
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            onChange={handleChange}
            checked={interests.includes("music")}
          />{" "}
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="reading"
            onChange={handleChange}
            checked={interests.includes("reading")}
          />{" "}
          Reading
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interests;