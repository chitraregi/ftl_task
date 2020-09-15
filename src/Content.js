import React, { useState } from "react";
import "./content.style.css";

const Content = ({ activity_details, tz }) => {
  const start_time = [];
  const end_time = [];
  const dates = [];
  for (let i = 0; i < activity_details.length; i++) {
    const st = activity_details[i].start_time.slice(11);
    const en = activity_details[i].end_time.slice(11);
    const da = activity_details[i].start_time.slice(0, 11);
    start_time.push(st);
    end_time.push(en);
    dates.push(da);
  }
  const [clicked, setClick] = useState(true);
  const handleClick = () => setClick(!clicked);
  return (
    <div>
      <button onClick={handleClick} className="show-timing">
        <strong>Timing Details </strong>
      </button>
      {!clicked ? (
        <div className="tzone">
          <h2>Timings</h2>
          <h3 className="tzone">Timezone : {tz}</h3>
          <div className="details">
            {start_time.map((start, index) => (
              <div key={index}>
                <strong>
                  <p>{dates[index]}</p>
                  <p>Starting Time : {start}</p>
                  <p>Ending Time: {end_time[index]}</p>
                </strong>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Content;
