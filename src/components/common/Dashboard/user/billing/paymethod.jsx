import DashboardContainer from '@/components/common/DashboardContainer'
import React from 'react'
import ActionButton from '../../actionbutton'

const PayMethod = () => {
  return (
    <DashboardContainer title="Paymeny method">
        <h2>No card on file</h2>
        <ActionButton/>
    </DashboardContainer>
  )
}

export default PayMethod