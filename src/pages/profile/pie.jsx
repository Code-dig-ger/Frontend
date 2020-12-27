import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Graph', 'Dp', 'Trees',
           'Arrays', 'Bit Manipulation','Strings','Number Theory','Recursion'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#B21F10',
        '#C9DE20',
        '#2FDE07',
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F',
      '#B21F10',
        '#C9DE20',
        '#2FDE05',
      ],
      data: [65, 59, 80, 81, 56,50,60,70]
    }
  ]
}

const myPie=()=>{
    return (
        <Pie  data={state}
        options={{
          title:{
            display:true,
            text:'Topicwise Distribution',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    )
}
export default myPie