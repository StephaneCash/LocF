import React from 'react'
import LocSpecialiste from './LocSpecialiste'

function FindSpecialist() {
  return (
    <div className="centerData" style={{ width:"89%", height:"auto", left:"54%", padding:"10px"}}>
      <h3 style={{position:"fixed"}}>Trouver un dépanneur</h3>
      <LocSpecialiste />
    </div>
  )
}

export default FindSpecialist
