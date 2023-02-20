import React, {useState} from 'react';

function TableFruits(){
    const[fruit, setFruit] = useState(["bannane","pomme","fraie","poire"])

    

    return(
        <>
        <table>
            {fruit.map(e => <tr><td>J'ai un/une {e}</td></tr>)}
        </table>
        
        </>
    )


}

export default TableFruits