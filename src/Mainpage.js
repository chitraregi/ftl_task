import React from "react";
import User from "./User";
import Content from "./Content";
import Main from "./Main";
import Header from "./Header";
import "./mainpage.style.css";

const MainPage = ({ activity }) => {
  const members = activity.map((member) => member);

  const id = [];
  const real_name = [];
  const activity_periods = [];
  const tz = [];
  for (let i = 0; i < members.length; i++) {
    id.push(members[i].id);
    real_name.push(members[i].real_name);
    activity_periods.push(members[i].activity_periods);
    tz.push(members[i].tz);
  }

  return (
    <div>
      <Header />
      <div className="all-content">
        {real_name.map((name, index) => (
          <div key={`User ${index}`} className="content">
            <User id={id[index]} name={name} />
            <Main activity={activity_periods[index]} />
            <Content
              activity_details={activity_periods[index]}
              tz={tz[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
