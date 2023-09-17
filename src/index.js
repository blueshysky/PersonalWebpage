import React from 'react';
import ReactDom from 'react-dom';
import item from './component/box.js';


export default class App extends React.Component{
  render() {
    return (
      <div>
        {item(1)}
        {item(4)}
        {item(7)}
      </div>
      )
  }
}

ReactDom.render(<App/>, document.getElementById("root"));