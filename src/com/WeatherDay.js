import { Fragment } from "react";
import w from "../db/weather.json";
import React from "react";
import "./weatherDay.css";

export default function WeatherDay(probs) {
  const d = probs.d;
  const witem = w.response.body.items.item[0];
  console.log(witem);

  const items = [];
  //   console.log(witem);
  const keys = [`rnst${d}am`, `rnst${d}pm`, `wf${d}am`, `wf${d}pm`];
  console.log(keys);
  console.log(witem["rnst3am"]);

  for (let k of keys) {
    items.push(witem[k]);
    console.log(k, items);
  }
  console.log(items);

  return (
    <Fragment>
      {/* <h2>{probs.d}</h2> */}
      <ul>
        <li className="l1">
          <span className="span1">{d}일후</span> 오전 강수량
          <span className="span2">{items[0]}%</span>
        </li>
        <li className="l1">
          <span className="span1">{d}일후</span>
          오후 강수량<span className="span2">{items[1]}%</span>
        </li>
        <li className="l1">
          <span className="span1">{d}일후</span> 오전 날씨예보
          <span className="span2">{items[2]}</span>
        </li>
        <li className="l1">
          <span className="span1">{d}일후</span> 오후 날씨예보
          <span className="span2">{items[3]}</span>
        </li>
      </ul>
    </Fragment>
  );
}
