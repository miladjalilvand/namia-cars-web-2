import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 50 },
  { name: "May", value: 75 },
  { name: "Jun", value: 90 },
];

const CurvedWhiteLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
        {/* حذف خطوط پس‌زمینه */}
        <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
        {/* محور X */}
        <XAxis
          dataKey="name"
          tick={{ fill: "#ffffff", fontSize: 12 }} // رنگ و اندازه متن
          axisLine={false} // حذف خط محور
          tickLine={false} // حذف خطوط کوچک زیر محور
        />
        {/* محور Y حذف شده */}
        <YAxis tick={false} axisLine={false} />
        {/* خط سفید خمیده */}
        <Line
          type="monotone"
          dataKey="value"
          stroke="#ffffff"
          strokeWidth={3}
          dot={false} // حذف نقاط
          animationDuration={1000}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CurvedWhiteLineChart;
