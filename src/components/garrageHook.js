import Voiture from "./voiture";
import React,{useState} from "react";

function Garage(){
const[infoVoiture, setInfoVoiture] = useState({marque:"peugeot",model:"206"})
const[nouvelle, setNouvelle] = useState({marque:"",model:""})


 const ajouter = (e) => {
    e.preventDefault();
    let valeur = document.querySelector("#champMarque").value;
    nouvelle.marque = valeur;
    let valeur2 = document.querySelector("#champModel").value;
    nouvelle.model = valeur2;
    console.log(nouvelle);
    
    setInfoVoiture(nouvelle => {return [...nouvelle,infoVoiture]})
    console.log(infoVoiture);
 }



return(
    <>
    <h2>Qui a-t-il dans mon garage ?</h2>
    <h3><Voiture info={infoVoiture}/></h3>
    <form>
        <input id="champMarque" type="text" name='marque' placeholder='marque'  ></input>
        <input id="champModel" type="text" name='model' placeholder='model' ></input>
        <button type="submit" onClick={ajouter}>entrer</button>
        </form>  
    </>
)

}
export default Garage;