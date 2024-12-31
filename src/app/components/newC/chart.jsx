// 'use client';

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { month: 'Jan', sales: 4000, revenue: 2400 },
//   { month: 'Feb', sales: 3000, revenue: 1398 },
//   { month: 'Mar', sales: 2000, revenue: 9800 },
//   { month: 'Apr', sales: 2780, revenue: 3908 },
//   { month: 'May', sales: 1890, revenue: 4800 },
//   { month: 'Jun', sales: 2390, revenue: 3800 },
//   { month: 'Jul', sales: 3490, revenue: 4300 },
// ];

// export function SampleLineChart() {
//   return (
//     <div className="w-full h-[400px] bg-card p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Sales & Revenue Overview</h2>
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           data={data}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 10,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
//           <XAxis
//             dataKey="month"
//             className="text-muted-foreground"
//           />
//           <YAxis className="text-muted-foreground" />
//           <Tooltip
//             contentStyle={{
//               backgroundColor: 'hsl(var(--popover))',
//               border: '1px solid hsl(var(--border))',
//               borderRadius: 'var(--radius)',
//             }}
//             labelStyle={{ color: 'hsl(var(--popover-foreground))' }}
//           />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="sales"
//             stroke="hsl(var(--chart-1))"
//             strokeWidth={2}
//             dot={{ fill: 'hsl(var(--chart-1))' }}
//             activeDot={{ r: 8 }}
//           />
//           <Line
//             type="monotone"
//             dataKey="revenue"
//             stroke="hsl(var(--chart-2))"
//             strokeWidth={2}
//             dot={{ fill: 'hsl(var(--chart-2))' }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }