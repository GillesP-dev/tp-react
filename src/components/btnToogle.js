import React, {useState} from 'react';

function BtnToogle(){
    const[etat, setEtat]= useState(true)
    

    const handleClick = () =>{
        if(etat === true){
            setEtat(false);
            console.log(etat);
            document.querySelector(".voyant").style.backgroundColor = 'red';
            
        } else {
            setEtat(true);
            console.log(etat);
            document.querySelector(".voyant").style.backgroundColor = 'green';
        }}

return (
<div>
    <button onClick={handleClick}>marche/arret</button>
    <div className='voyant'></div>

</div>

)


}

export default BtnToogle;