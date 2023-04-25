"use client";

import { Card, AreaChart, Title } from "@tremor/react";

type Props = {
  results: Root;
};

const RainChart = ({ results }: Props) => {
  const hourly = results?.hourly.time.map((time) =>
    new Date(time)
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: false,
      })
      
  ).slice(0, 24);

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Rain (%)": results.hourly.precipitation_probability[i]
  }));

  const dataFormatter = (number: number) => `${number} %`;

  return (
    <Card>
      <Title>Chances of Rain</Title>
      <AreaChart
        data={data}
        showLegend
        className="mt-6"
        index="time"
        categories={["Rain (%)"]}
        colors={["blue"]}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default RainChart;
