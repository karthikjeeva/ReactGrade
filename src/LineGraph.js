import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4'],
    datasets: [
      {
        label: 'Biology MarkSheet',
        data: [12, 19, 3, 20],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

const LineChart = () => (
    <>
    <div className='header'>
        <Line data={data} options={options} />
    </div>
   
  </>
);

export default LineChart;
 