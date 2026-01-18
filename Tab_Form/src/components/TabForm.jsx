import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [data, setData] = useState({
    name: "swapna",
    age: 28,
    email: "swapna@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 3) {
          err.name = "Name is not valid";
        }

        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }

        if (!data.email || data.email.length < 3) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;
  const handlePrev = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <div className={data.theme === "dark" ? "dark" : "light"}>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`heading ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <ActiveTabComponent
          data={data}
          setData={setData}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
      <div>
        {activeTab > 0 && (
          <button className="btn" onClick={() => handlePrev()}>
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button className="btn" onClick={() => handleNext()}>
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button className="btn" onClick={() => handleSubmit()}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
