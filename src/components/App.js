
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count,setcount]=useState(0);

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick={()=>setcount(count+1)}>Click me</button>
    </div>
  )
}

export default App
