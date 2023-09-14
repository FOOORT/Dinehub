import StatsCard from '@/components/common/StatsCard'
import React from 'react'

const StatsContainer = () => {
  return (
    <div className="w-full flex flex-col px-6 p-6 bg-slate-100 rounded-lg">
      <h2 className="font-bold text-lg border-b pb-2 mb-2">Dashboard</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2 gap-4">
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
    </div>
  );
}

export default StatsContainer