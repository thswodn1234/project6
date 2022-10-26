import WeatherDay from "./WeatherDay";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

function WeatherMain() {
  let [day, setDay] = useState(3);

  const handleClick = (d) => {
    setDay(d);
    console.log(d);
  };
  return (
    <Fragment>
      <h1>날씨예보</h1>
      <form>
        <Link to="/">
          <button>홈으로</button>
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick(3);
          }}
        >
          3일후날씨
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick(4);
          }}
        >
          4일후날씨
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick(5);
          }}
        >
          5일후날씨
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick(6);
          }}
        >
          6일후날씨
        </button>
      </form>
      <WeatherDay d={day} />
    </Fragment>
  );
}

export default WeatherMain;
