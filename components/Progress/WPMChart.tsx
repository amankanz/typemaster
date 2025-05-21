// WPMChart.tsx
"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: { session: string; wpm: number }[];
}

export default function WPMChart({ data }: Props) {
  return (
    <div className="bg-white/5 rounded-2xl p-4 shadow-md w-full">
      <h3 className="text-lg font-semibold mb-2">Words Per Minute</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="session" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="wpm"
            stroke="#38bdf8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
