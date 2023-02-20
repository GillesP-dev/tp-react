import React,{useState} from "react";
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import { createContext } from 'react';
import DashBord2 from './dashbordChart2';
import DashBord3 from "./dashbordChart3";

export const contextDashBord = createContext("");




    const DashBord = () => {
        const[labelJour, setLabelJour] = useState(["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]);
        
        const[data, setData] = useState({
          labels: labelJour,
          datasets: [
            {
              label: "Consommation électrique journalière en KW/h",
              backgroundColor: "lightblue",
              borderColor: "green",
              data: [ 5,13, 10, 16, 14, 8],
            },
          ],
        });
        const valeurdata = data.datasets[0].data.slice();
        let valeurJour ;
        console.log(valeurJour);
        let valeurDataInput ;
       
        function recupeValeur(){
          valeurJour = document.querySelector("#jour");
          valeurDataInput = document.querySelector("#valeur");
           let recupvaleurJour = valeurJour.value;
           let recupData = valeurDataInput.value
           let indexjour = labelJour.indexOf(recupvaleurJour);
           valeurdata[indexjour]= recupData;
           console.log(valeurdata);
           setData({...data,datasets:[{...data.datasets[0],data:valeurdata}]});
           
       
          
          console.log(recupData);
          console.log(indexjour);
        }
        
        return (
          <>
          <h2>Changement des Valeurs</h2>
          <label htmlFor="jour">Donner un jour</label>
          <input id="jour" type="text"></input>
          <label id="labelValeur" htmlFor="valeur">Mettre une valeur</label>
          <input id="valeur" type="text"></input>
          <button type="button" onClick={recupeValeur}>enter</button>
          <div className="dashBord">
          <div className="chart" style={{height:500+"px", width: 500+"px"}}>
            <Line  options={options} data={data} />
          </div>
          <contextDashBord.Provider value={{labelJour,data}}>
            <DashBord2/>
            <DashBord3/>
          </contextDashBord.Provider></div>
          </>
        );

       
    };
    export const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Consommation',
          },
        },
      };

export default DashBord;