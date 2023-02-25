import React, { useState } from "react";
import Chilsfun from "./Chilsfun";

const Parentfun = () => {
  const [show, setShow] = useState(true);
  const parentFun = (type) => {
    show:setShow(!show);
    console.log("working", show ,type);
  };
  return (
    <div>
      {show ? <h1>Parentfun Component</h1> : null}

      <button onClick={() => parentFun("parent")}>Parent Button</button>
      <Chilsfun childFun={parentFun} />
    </div>
  );
};

export default Parentfun;
