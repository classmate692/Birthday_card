import React from "react";
import { useState } from "react";
function If_else(){
    const [loggedin,setloggedin]=useState(0)
    //const loggedin=1;
    return(
        <>
        <div>
            {loggedin==1?<h1>hello who are you</h1>:<h1>hello sakshi</h1>}
        </div>
        </>
    )
}
export default If_else;