import React, { useEffect, useState } from 'react'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';

const Chart = ({data}) => {
  const [cd, setcd] = useState([]) 

  useEffect(()=>{
    if(data && data.prices){
        // Transform array of arrays → array of objects
        const formated = data.prices.map(item=> ({
            time: item[0],
            price: item[1]
        }));
        setcd(formated)
    }
  },[data])  

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full h-[300px] mt-10">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={cd}>
        
        <XAxis 
            dataKey="time" 
            tickFormatter={formatDate}   
            axisLine={false}             
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            minTickGap={50}           
        />

        <YAxis
            hide={false}
            domain={['dataMin - 5', 'dataMax + 5']}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            axisLine={false}
        />
        
        <Tooltip 
            labelFormatter={formatDate}  
            formatter={(value) => [`$${value.toLocaleString()}`, 'Price']}
            contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff'
            }}
        />
        
        <defs>
            <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="9" height="9">
                <circle cx="5" cy="5" r="1" fill="#8b1cf9" />
            </pattern>
        </defs>

        <Area 
            type="linear" 
            dataKey="price" 
            stroke="#8b5cf9" 
            fill="url(#dotPattern)"  
        />
        
      </AreaChart>
    </ResponsiveContainer>
  </div>
  )
}

export default Chart