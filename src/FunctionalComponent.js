import React, { useState } from "react";
function Fun(props){
    console.log('work on every click')
    return(
        <div>
            <h1>Class component name :- {props.name}</h1>
        </div>
    )
}
export default React.memo(Fun);