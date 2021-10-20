import React from 'react'
import Loader from 'react-loader-spinner';

function Load() {
    return (
        <div className="load" style={{ position: "absolute", left: "45%", marginTop: "230px" }}>
            <Loader type="Oval" color="black" height={50} width={50} margin="auto" />
        </div>
    )
}

export default Load
