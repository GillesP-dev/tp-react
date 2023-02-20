import React, {useState} from 'react';

function Timer(){
    const[date, setDates] = useState(new Date())

const miseAJour = () => {
    setDates(new Date())
}

    setInterval(miseAJour, 1000)

    return(
       
         <p>il est :{date.toLocaleTimeString()} </p>
    )
}
export default Timer 