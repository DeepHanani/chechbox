import React, { useState } from 'react'

export default function Radio() {

    const[gender , setGender]= useState("")

    const handalchange = (e)=>{
        setGender(e.target.value);
    }

    const handalSubmit = (e)=>{
        e.preventDefault();

        const data = {gender}
        const json = JSON.stringify(data)
        console.log(json);
    }

    console.log(gender)
  return (

    <form onSubmit={handalSubmit}>
    <div>
    mele<input type='radio' value='mele' onChange={handalchange}  checked = {gender === "mele"}/>
    femele<input type='radio' value= 'femele' onChange={handalchange} checked = {gender === "femele"}/><br></br>

    <button type='submit' >submit</button>
    </div>
    </form>
    
  )
}
