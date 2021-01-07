import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputApp from "./components/input";
import TableApp from "./components/table";

import './styles/main.scss';

//Main component of the application

const App = () => {

  const loadFramework = (search)=>{
      fetch('https://api.github.com/search/repositories?q='+search+'&page=1&per_page=10&sort=stars&order=descn')
      .then(response => response.json())
      .then(data => setList(data.items || []));
  }

  const [list, setList] = useState([]);

  return (
      <div className="main">
          <InputApp placeholder="framework" onChange={(val)=>loadFramework(val)} />
          <TableApp list={list} />
      </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

