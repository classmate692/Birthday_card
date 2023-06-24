import './Card.css'
import React from "react"; 
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import { useState } from 'react';
function Card (){
     const[name,setName]=useState("");
     const[show,setShow]=useState(true);
     const[wish,setWish]=useState("Happy brithday");
     const[imge,setImge]=useState(img1);
     const shown  = event => {
       setShow(false);
       setWish(wish +" "+ name)
       setImge(img2);
      };
 return (
    <>
    <div className="Cardcontainer">
        <div className="image">
          <img src={imge} ></img>
        </div>
        <div>
            <h2>{wish}{show &&<div>
             <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
             </div>}
             {show && <button className="btn" onClick={shown}>Enter</button>}
            </h2>
        </div>
    </div>
    </>
 )
}
export default Card;