import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Codeforces','codechef','atcoder'],
  datasets: [
    {
       labels:['Codeforces','codechef','atcoder'],
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
       
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      
      ],
      data: [65, 59, 80]
    }
  ]
}

const myBar=()=>{
    return (
        <Bar  data={state}
        options={{
          title:{
            display:true,
            text:'Platform wise Distribution',
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
export default myBar