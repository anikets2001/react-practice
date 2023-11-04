import { useState, useEffect } from "react";
import "./style.css";

const getCurrentDateTime = () => {
  const now = new Date();
  const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";
  const twelveHourFormat = hours % 12 || 12;

  const time = `${twelveHourFormat}:${minutes}:${seconds} ${meridiem}`;
  return { date, time };
};

const DateAndTime = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentDateTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentDateTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="parent">
        <div className="wrapper">
          <h1>The current Date and Time are:</h1>
          <p className="now">Date: {currentTime.date}</p>
          <p className="now">Time: {currentTime.time}</p>
        </div>
      </div>
    </>
  );
};

export default DateAndTime;
