import React,{useState,useEffect,useContext} from "react";
import { contextTaskes } from "./tableauListeTaches";

function CreateNewTaske(){
    const value = useContext(contextTaskes);
const[newTaske, setnewTaske] = useState([{tache: "creer une to-do-liste"}])

    return(
        <>
        <tr><td>Taches {newTaske[0].tache}</td></tr>
        {console.log(newTaske)}
        </>
    )
}
export default CreateNewTaske;