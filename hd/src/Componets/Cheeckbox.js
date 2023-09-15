import React, { useState } from 'react'

export default function Cheeckbox() {

    const[active , setActive]= useState("js")

    const handalChange = (e)=>{
      setActive(e.target.value)
    }

    console.log(active);

  return (
    <div>
           js<input type='checkbox' name='languages' value= 'js' onChange={handalChange} checked ={active === "js"}/>
           react<input type='checkbox' name='languages' value= 'react' onChange={handalChange} checked ={active === "react"}/>
          html <input type='checkbox' name='languages' value= 'html' onChange={handalChange} checked ={active === "html"}/><br></br>
         <br></br>
         
    </div>
  )
}
