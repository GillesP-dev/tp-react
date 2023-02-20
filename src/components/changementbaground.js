import React,{useState, useEffect} from "react";
let nouvelleCouleur = localStorage.getItem("color");

function Changement(){

 const[couleur, setcouleur] = useState(nouvelleCouleur)   



 const changementCouleur = (e) =>{
    setcouleur(e.target.value);
    localStorage.setItem("color",e.target.value);
    
    
 }
 useEffect(()=>{
    document.body.style.background = couleur;
    
})
return(
<input value={couleur} type="color" onChange={changementCouleur}></input>
)


}
export default Changement;