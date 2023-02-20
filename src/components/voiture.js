import React,{useState} from 'react'

function Voiture(props){

    const voiture = props.info

    return(
        <>
        <ul><li>Je suis une {voiture.marque} {voiture.model}</li></ul>
        
        </>
    ) 
}
export default Voiture;