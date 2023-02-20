import React,{useState, useEffect} from "react";

function Changement(){
 const[couleur, setcouleur] = useState("white")   

useEffect(()=>{
    document.body.style.background = couleur
})
return(
<input value={couleur} onChange={(e)=>{setcouleur(e.target.value)}}></input>
)


}
export default Changement;