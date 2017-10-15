import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const SparkLineChart = ({ data, color, average, units }) => {
  return (
    <td>
      <Sparklines data={data} width={100} height={30}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average} {units}</div>
    </td>
  );
};

export default SparkLineChart;
