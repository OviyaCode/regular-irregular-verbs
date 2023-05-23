import React, { useState } from 'react';
import { VerbList } from "../Helpers/VerbList";

export default function Changer() {
  const [base, setBase] = useState();
  const [v2, setV2] = useState("");
  const [v3, setV3] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setBase(event.target.base)
    setMessage(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (base.trim().length !== 0 && message.trim().length !== 0) {
      console.log("not empty");
      
    }
    else {
      alert("Please insert a verb")
    }
  }


  return (
    <div>
      <h3>Convertion of regular & irregular verbs </h3>
      <div className="form-control">
        <input type="text" onChange={handleChange} placeholder="Enter a verb ...." value={base} />
      </div>
      <div className="form-control">
        <button onClick={handleClick}>Convert</button>
      </div>
      <div className="form-control">
      {v2 && v3 ? (<p>V2:{v2}  V3:{v3}.</p>):(
        <p>The output is shown here</p>
      )}
      </div>
    </div>
  );
}
