import React from "react";
import "./styles.css";
import { data, calRewardPoint } from "./data";

export default function App() {
  let eachMonth = (cust, month) =>
    data[cust][month].reduce((total, each) => calRewardPoint(each) + total, 0);

  let total = cust =>
    Object.values(data[cust])
      .flat()
      .reduce((total, each) => calRewardPoint(each) + total, 0);

  let totalRecord = cust => {
    return <h4>Total&nbsp;{total(cust)}</h4>;
  };

  let innerRecord = cust => {
    return Object.keys(data[cust]).map(month => {
      return (
        <>
          <h4>
            {month}&nbsp;{eachMonth(cust, month)}
          </h4>
        </>
      );
    });
  };

  let record = Object.keys(data).map(cust => {
    let inner = innerRecord(cust);
    let total = totalRecord(cust);
    return (
      <>
        <h2>{cust}</h2>
        <div>{inner}</div>
        <div>{total}</div>
      </>
    );
  });

  return (
    <div className="App">
      <h2>Record of Every Transaction during a three month period</h2>
      {record}
    </div>
  );
}
