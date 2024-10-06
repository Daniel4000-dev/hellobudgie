"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1st",
    uv: 2500,
    pv: 3186,
    amt: 2400,
  },
  {
    name: "2nd",
    uv: 1900,
    pv: 1698,
    amt: 2210,
  },
  {
    name: "3rd",
    uv: 1600,
    pv: 2300,
    amt: 2290,
  },
  {
    name: "4th",
    uv: 1280,
    pv: 1908,
    amt: 2000,
  },
  {
    name: "5th",
    uv: 1290,
    pv: 2100,
    amt: 2181,
  },
  {
    name: "6th",
    uv: 2490,
    pv: 2300,
    amt: 2500,
  },
  {
    name: "7th",
    uv: 1390,
    pv: 2800,
    amt: 2100,
  },
  {
    name: "8th",
    uv: 1230,
    pv: 1600,
    amt: 2181,
  },
  {
    name: "9th",
    uv: 1390,
    pv: 2600,
    amt: 2500,
  },
  {
    name: "10th",
    uv: 1490,
    pv: 2800,
    amt: 2100,
  },
  {
    name: "11th",
    uv: 2490,
    pv: 2800,
    amt: 2181,
  },
  {
    name: "12th",
    uv: 1190,
    pv: 2400,
    amt: 2500,
  },
  {
    name: "13th",
    uv: 1490,
    pv: 2700,
    amt: 2100,
  },
  {
    name: "14th",
    uv: 1490,
    pv: 2800,
    amt: 2100,
  },
  {
    name: "15th",
    uv: 2490,
    pv: 2800,
    amt: 2181,
  },
  {
    name: "16th",
    uv: 2190,
    pv: 2400,
    amt: 2500,
  },
  {
    name: "17th",
    uv: 2490,
    pv: 2700,
    amt: 2100,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        width={20}
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
        <Legend />
        <Bar
          dataKey="pv"
          fill="#E8903D"
          activeBar={<Rectangle fill="pink" stroke="red" />}
        />
        <Bar
          dataKey="uv"
          fill="#040930"
          activeBar={<Rectangle fill="gold" stroke="gray" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
