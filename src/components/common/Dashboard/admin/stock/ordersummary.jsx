"use client";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
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
    Sales: 4000,
    Purchase: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Sales: 3000,
    Purchase: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Sales: 2000,
    Purchase: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    Sales: 2780,
    Purchase: 3908,
    amt: 2000,
  },
  // {
  //   name: "Page E",
  //   Sales: 1890,
  //   Purchase: 4800,
  //   amt: 2181,
  // },
  // {
  //   name: "Page F",
  //   Sales: 2390,
  //   Purchase: 3800,
  //   amt: 2500,
  // },
  // {
  //   name: "Page G",
  //   Sales: 3490,
  //   Purchase: 4300,
  //   amt: 2100,
  // },
];

export default class OrderSummary extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";
  render() {
    return (
      <div className="bg-white w-full rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">Order Summary</h2>

        <ResponsiveContainer width={440} height={250}>
          <LineChart
            width={500}
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
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="Purchase"
              stroke="#FF3A29"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Sales" stroke="#2072EE" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
