"use client";
import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Tues",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Wed",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Thu",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Frid",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Sat",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: "Sun",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

export default class WeeklyRate extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/vertical-composed-chart-w6fni";

  render() {
    return (
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="scale-110 -ml-5 mt-2"
      >
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          className=" rounded-full"
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          {/* <Legend /> */}
          {/* <Area dataKey="amt" fill="#ffffff" stroke="#8884d8" /> */}
          <Bar
            dataKey="pv"
            barSize={20}
            fill="#0b6d3a"
            className=" rounded-full"
          />
          {/* <Line dataKey="uv" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
