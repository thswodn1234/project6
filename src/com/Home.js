// import WeatherMain2 from "./com/WeatherMain2";
import { Fragment } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
export default function Home() {
  return (
    <Fragment>
      <h1>일기예보</h1>
      <div className="container">
        <form>
          <Link to="/c1">
            <button className="bt1">단기예보</button>
          </Link>
          <Link to="/c2/h">
            <button className="bt2">중기예보</button>
          </Link>
        </form>
      </div>
    </Fragment>
  );
}
