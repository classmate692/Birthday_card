import React from "react";
function Home (){
    const shot =(a)=>{
          alert(a);
    }
    return (
        <>
        <h1>hii i am Home page</h1>
        <button onClick={()=> shot("goof")}>onclick</button>
        </>
    )
};
export default Home;