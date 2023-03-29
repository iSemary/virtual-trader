// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import React from "react";
import { useState } from "react";
import ApexCharts from 'react-apexcharts'

function Home() {
  const [options, setOptions] = useState({
    chart: {
      type: "candlestick",
      height: 650,
    },
    title: {
      text: "Candlestick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  });

  const [series, setSeries] = useState([
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
      ],
    },
  ]);

  return (
    <ApexCharts
      options={options}
      series={series}
      type="candlestick"
      height={650}
    />
  );
}

export default Home;
