import React from "react";
import '../assets/style.css';

class Calculate {
  constructor() {
    this.total = 0;
  }

  add(num) {
    this.total += num;
  }

  getTotal() {
    console.log(this.total);
  }
}
var cal = new Calculate();

const item = (num) => {
  return (
    <ol>
      <button onClick={cal.add(num)} className="square">{num}</button>
      <button onClick={cal.add(num+1)} className="square">{num + 1}</button>
      <button onClick={cal.add(num+2)} className="square">{num + 2}</button>
      <button onClick={cal.getTotal()} className="square">enter</button>
    </ol>
  )
}

export default item;