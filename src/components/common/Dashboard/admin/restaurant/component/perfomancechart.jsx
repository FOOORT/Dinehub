"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    client: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    client: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    client: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    client: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    client: 1890,
    pv: 4800,
    amt: 2181,
  },
  // {
  //   name: "June",
  //   client: 2390,
  //   pv: 3800,
  //   amt: 2500,
  // },
];

export default class PerfomanceChart extends PureComponent {
  // static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={100}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
          <Bar dataKey="client" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
