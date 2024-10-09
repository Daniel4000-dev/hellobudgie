"use client"
 
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
 
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
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

const chartConfig = {
  desktop: {
    label: "pv",
    color: "#E8903D",
  },
  mobile: {
    label: "uv",
    color: "#040930",
  },
} satisfies ChartConfig

export function Overview() {
  return (
    <ChartContainer config={chartConfig} className=" mx-auto h-[280px] w-full">
    <BarChart accessibilityLayer data={chartData} barSize={6}>
      <CartesianGrid vertical={false} horizontal={false} />
      <XAxis
        dataKey="name"
        tickLine={false}
        tickMargin={10}
        axisLine={true}
        tickFormatter={(value: any) => {
          if (typeof value === 'string') {
            return value.slice(0, 3); // Truncate the string to the first 3 characters
          }
          return value; // Return the value as-is if it's not a string
        }}
      />
      <YAxis />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
      <Bar dataKey="pv" fill="var(--color-desktop)" radius={[10, 10, 10, 10]} />
      <Bar dataKey="uv" fill="var(--color-mobile)" radius={[10, 10, 10, 10]} />
    </BarChart>
  </ChartContainer>
  );
}
