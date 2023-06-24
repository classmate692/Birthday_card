import React from 'react'
function Hide_show_button(){
    const [status,setStatus]=React.useState(true)
    return (
        <div className="Rollap">
             {
                status?<h1>Hello world!</h1>:null
             }  
             <button onClick={()=>setStatus(!status)}>more</button>
        </div>
    )
}
export default Hide_show_button;