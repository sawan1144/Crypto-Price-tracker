import React, { useEffect, useState } from 'react'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';

const Chart = ({ data }) => {
  const [cd, setcd] = useState([])

  useEffect(() => {
    if (data && data.prices) {
      const formated = data.prices.map(item => ({
        time: item[0],
        price: item[1]
      }));
      setcd(formated)
    }
  }, [data])

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full h-[260px] sm:h-[320px] md:h-[360px] my-6 bg-[#101010] p-3 sm:p-4 rounded-2xl border border-gray-800 shadow-xl">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={cd} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <XAxis
            dataKey="time"
            tickFormatter={formatDate}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 11 }}
            minTickGap={40}
          />

          <YAxis
            hide={false}
            domain={['dataMin - 5', 'dataMax + 5']}
            tick={{ fill: '#9ca3af', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(val) => val >= 1000 ? `${(val / 1000).toFixed(1)}k` : val}
          />

          <Tooltip
            labelFormatter={formatDate}
            formatter={(value) => [`$${typeof value === 'number' ? value.toLocaleString() : value}`, 'Price']}
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '12px'
            }}
          />

          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="price"
            stroke="#8b5cf6"
            strokeWidth={2}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart