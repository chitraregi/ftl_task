import React, { useEffect, useState } from "react";
import "./App.css";
import Mainpage from "./Mainpage";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(`http://localhost:5000/members`);
    const datares = await res.json();
    console.log(datares);
    await setData(datares);
    console.log(data);
    setLoading(false);
  };

  return (
    <div classname="App">{loading ? "" : <Mainpage activity={data} />}</div>
  );
};

export default App;
