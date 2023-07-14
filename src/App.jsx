import React, { useState } from 'react'
import Chart from 'react-google-charts'

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 3],
  ["Coding", 4],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const App = () => {
  const [options, setOptions] = useState({
    title: "My Daily Activities",
    is3D: true,
  })

  const chart3d = () => {
    setOptions({
      ...options,
      is3D: !options.is3D
    });
  }
  return (
    <div>
      <h1>Chart</h1>
      <div className='chart-div'>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"500px"}
        />
        <button style={{top: '15%', right: '5%'}} className='toogle-3d' onClick={chart3d}>3D Chart</button>
      </div>
    </div>
  )
}

export default App