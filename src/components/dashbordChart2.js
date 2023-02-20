import React, { useState, useContext } from 'react';
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2'
import {contextDashBord} from './dashbordChart1'




    const DashBord2 = () => {
        const value = useContext(contextDashBord);
        
        const valeurdata = value.data.datasets[0].data;
        
        const labels = value.labelJour;
        const data = {
          labels: labels,
          datasets: [
            {
              label: "Consommation électrique journalière en KW/h",
              backgroundColor: ['blue','red','black','yellow','grey','green'],
              borderColor: "green",
              data: valeurdata,
            },
          ],
        };
        return (
          <>
          
          <div className="chart" style={{height:500+"px", width: 500+"px"}}>
            <Bar  options={options} data={data} />
          </div>
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

export default DashBord2;