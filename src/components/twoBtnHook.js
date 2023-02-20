import React, {useState} from 'react';

function TwoBtn(){
const [affichages, setAffichages] = useState("")

const handleClick = (e) => {
  e.target.name === "but"?setAffichages("C'est le but"): setAffichages("C’est dans les gradins")
}



    return(
        <>
        <button name="but" onClick={handleClick}>C’est le but</button>
        <button name="gradins" onClick={handleClick}>C’est dans les gradins</button>
        <h3>{affichages}</h3>
        </>
    )
}

export default TwoBtn;