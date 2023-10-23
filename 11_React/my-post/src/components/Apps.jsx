import React, {useState} from "react";
import './Apps.css';
function Apps() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <main>
      <div>state:{count}</div>
      <button onClick={increase}>증가</button>
    </main>
  );
}

export default Apps;