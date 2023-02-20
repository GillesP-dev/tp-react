import React, {useState, useContext} from 'react';



function Personnes(){

    const[nom, setNom] = useState ("pierre");
    const[age, setAge] = useState ("20")
    



    return(
        <div >
            <input value={nom}  onChange={e => setNom(e.target.value)}></input>
            <input value={age}  onChange={e => setAge(e.target.value)}></input>
            <p >{nom} vous avez : {age}ans</p>
        </div>

    )

    




}

export default Personnes;