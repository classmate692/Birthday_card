import React from "react";
function Click_with_function()
{ 
    return(
        <div>
            <h1>hello this is click event</h1>
            <button onClick={()=>alert("i am another one here")}>Click me</button>
        </div>
    )
}
export default Click_with_function;