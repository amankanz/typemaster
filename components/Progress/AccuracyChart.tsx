// AccuracyChart.tsx
"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: { session: string; accuracy: number }[];
}

export default function AccuracyChart({ data }: Props) {
  return (
    <div className="bg-white/5 rounded-2xl p-4 shadow-md w-full">
      <h3 className="text-lg font-semibold mb-2">Accuracy (%)</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="session" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="accuracy" fill="#f472b6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
