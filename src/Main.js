import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./cal.style.css";

const Main = ({ activity }) => {
  const periods = [];

  const convert = (props) => {
    const d = new Date(props);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da}-${mo}-${ye}`;
  };

  for (let i = 0; i < activity.length; i++) {
    const d = convert(activity[i].start_time.slice(0, 11));
    periods.push(d);
  }

  let start = activity[0].start_time.slice(0, 11).toLowerCase();

  const [date, setDate] = useState(new Date(start));
  const [clicked, setClick] = useState(true);
  const onChange = (date) => {
    setDate(date);
  };

  const handleClick = () => setClick(!clicked);
  return (
    <div className="cal-content">
      <button onClick={handleClick} className="show">
        <strong> Activty</strong>
      </button>
      {!clicked ? (
        <div>
          <Calendar
            onChange={onChange}
            value={date}
            tileClassName={({ date, view }) => {
              if (
                periods.find((x) => x === moment(date).format("DD-MM-YYYY"))
              ) {
                return "highlight";
              }
            }}
            tileDisabled={({ date }) => date.getDay() === 0}
            minDate={new Date(start)}
            maxDate={new Date()}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
