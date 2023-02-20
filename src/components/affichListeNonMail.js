import React,{useState} from "react";
import Affichtel from "./affichTel";

function NomMailList(props){

    const nomMailTel = props.info

    return(
        <>
        <p>{nomMailTel.nom} Mail: {nomMailTel.mail}</p>
        <Affichtel tel = {nomMailTel}/>
        </>
    )
}
export default NomMailList