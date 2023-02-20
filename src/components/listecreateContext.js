import { createContext } from 'react';
import React,{useState} from "react";
import NomMailListContext from './affichNomMailContext';

export const TestContext = createContext("");

function ListemailTel (){
    const[contact, setConact] = useState ({nom:"jean",mail:"ggg@fr.fr",tel:"01.02.01.01"})
   
       return(
        <>
        <TestContext.Provider value={contact}>
        <NomMailListContext/>
        </TestContext.Provider>
           
        </>
       )
   }
   
   export default ListemailTel;
