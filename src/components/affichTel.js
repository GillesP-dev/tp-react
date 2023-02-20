import React,{useState} from "react";

function Affichtel(props){
 const telephon = props.tel

    return(
        <p>Téléphone: {telephon.tel}</p>
    )
}
export default Affichtel;