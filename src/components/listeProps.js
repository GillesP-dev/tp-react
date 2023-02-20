import React,{useState} from "react";
import NomMailList from './affichListeNonMail'

function ListeContacts (){
 const[contact, setConact] = useState ({nom:"jean",mail:"ggg@fr.fr",tel:"01.02.01.01"})

    return(
        <NomMailList info = {contact}/>
    )
}

export default ListeContacts;