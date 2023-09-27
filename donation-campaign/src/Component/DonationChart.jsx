import React, { useEffect, useState } from "react";
import { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const DonationChart = () => {
  const [displayDonated, setDisplayDonated] = useState([]);

  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem("Donation List"));
    setDisplayDonated(donationItem || []);
  }, []);

  // console.log(displayDonated);
  const remainingDonation = 12 - displayDonated.length;

  const data = [
    { name: "Donated", value: displayDonated.length },
    { name: "Donation Remaining", value: remainingDonation },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="chart grid grid-cols-1 justify-center ">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="flex items-center justify-center gap-2 ">
        <div className="donation">Your Donation </div>
        <span className="w-16 h-1 bg-red-500 flex"></span>
        <div className="Remaining ml-3">Total Donation </div>
        <span className="w-16 h-1 bg-emerald-500 flex"></span>
      </div>
    </div>
  );
};

export default DonationChart;
