import { tab } from "@testing-library/user-event/dist/tab";
import React,{useState,useEffect,useContext,createContext } from "react";
import CreateNewTaske from './CreerNouvelleTache'

export const contextTaskes = createContext("");

const tableaux = ["Taches a faire","En cours","Fait"];
function DisplayTaskes(){

    const nouvelleTache = () => {
        const newDiv = document.createElement("div");
        const newImput = document.createElement("input");
        newDiv.className = "divNouvelleTache";
        document.body.appendChild(newDiv);
        newDiv.appendChild(newImput);

    }


    return (<><table className="tableau">
    
                <caption className="TitreTableau"> {tableaux[0]}
                </caption>  
                <contextTaskes.Provider value={nouvelleTache}><CreateNewTaske/></contextTaskes.Provider>  
          <button className="btnListeTache" onClick={nouvelleTache}>Ajouter une Tache</button>
          </table>
          <table className="tableau">
    
                <caption className="TitreTableau"> {tableaux[1]}
                </caption>     
          
          </table>
          <table className="tableau">
    
                <caption className="TitreTableau"> {tableaux[2]}
                </caption>     
          
          </table>
        
    </>)
}
export default DisplayTaskes