import React from 'react'
import LocSpecialiste from './LocSpecialiste'
import Menu from './Menu'

function FindSpecialist() {
  return (
    <div className="centerData" style={{}}>

      <div className="col-md-12" style={{ backgroundColor: "#f0f0f0", width: "100%", height: '97vh' }}>
        <div className="row">
          <div className="col-md-1 menu" style={{ marginLeft: "-17.5px", marginTop: "-10px" }}>
            <Menu></Menu>
          </div>
          <div className="col-md-11 contentGenaral" style={{ marginLeft: '9.5%', marginTop: '60px', maxWidth: "88.5%", height: "76vh" }}>
            <h3>Trouver un dépanneur</h3>
            <LocSpecialiste />
          </div>
        </div>
      </div>
    </div >
  )
}

export default FindSpecialist
