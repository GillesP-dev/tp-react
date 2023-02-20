import React,{useContext, useState} from "react";
import {TestContext} from "./listecreateContext";


function NomMailListContext(){
   const value = useContext(TestContext);
   console.log(value);

    return(
        <>
         <p>{value.nom} Mail: {value.mail} Tél: {value.tel}</p>
        
        </>
    )
}
export default NomMailListContext;