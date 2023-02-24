import React, { useState } from "react";

function Contuncont() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function submitHandler(e) {
      if (name === "") {
          alert("fill the name");
        } else {
            console.log("Name :- ", name); 
        }
        console.log("Email :- ", email);
        console.log("Password :- ", password);
        e.preventDefault();
    // alert('working')
  }
  return (
    <>
      <div>Contuncont</div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Contuncont;
