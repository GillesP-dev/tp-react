import React, {useState} from 'react';

function CountHook (){
    const[count, setcount] = useState(0)
    const[names, setName] = useState("0")

     const handleClick = (e) => {
        setName(e.target.name);
        count>=5 ? alert("limite Atteinte") : setcount(count+1);
        
    }
    const handleClickMoin = (e) => {
        setName(e.target.name);
        
        count>=0 ? setcount(count-1): alert('linmite') 
    }

    return (
    <> <h1>Compteur : {count}</h1>
        <button name="plus" onClick={handleClick}>+</button>
        <button name="moin" onClick={handleClickMoin}>-</button>
        {console.log(names)}
        <p>dernier bouton clické : {names}</p>
    </>)
}

export default CountHook;