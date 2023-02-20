import React,{useState} from "react";

function HelloHook(){
    const[name, setName] = useState("")

    return(
        <>
        <h1>Bonjour, {name}</h1>
        <input type= "text" value={name} onChange={e=> setName(e.target.value)}></input>
         </>
    )
}
 export default HelloHook;