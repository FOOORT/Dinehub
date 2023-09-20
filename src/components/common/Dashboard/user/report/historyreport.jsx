import DashboardContainer from '@/components/common/DashboardContainer'
import React from 'react'
import HistoryTable from './common/historytable'

const HistoryReport = () => {
  return (
    <DashboardContainer title="History">
        <HistoryTable/>
    </DashboardContainer>
  )
}

export default HistoryReport