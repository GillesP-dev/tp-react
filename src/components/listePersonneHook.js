import React, {useState} from 'react';

function ListePersonne(){
    const[noms, setNom] = useState([{nom:"duchmol",prenom:"pierre"},{nom:"brindille",prenom:"jean"},{nom:"costaud",prenom:"paul"}]);
    const[nouveauNom, setNouveauNom] = useState([{nom:"",prenom:""}])

    
    
    const nouveau = (e)=>{
        nouveauNom[e.target.name]= e.target.value
        console.log(e.target.name)
        
    }
    const ajouter= (e) =>{
        e.preventDefault()
        
        setNom([...noms,nouveauNom])
        console.log(nouveauNom)
        console.log(noms)
    }


    return(
        <>
        <ul>
            {noms.map(e => <li>{e.nom} {e.prenom}</li>)}
            
        </ul>
        <form>
        <input  name='nom' placeholder='nom' value={nouveauNom.nom} onChange={nouveau}></input>
        <input name='prenom' placeholder='prenom' value={nouveauNom.prenom} onChange={nouveau}></input>
        <button type="submit" onClick={ajouter}>entrer</button>
        </form>  
        
        </>
    )
}

export default ListePersonne;