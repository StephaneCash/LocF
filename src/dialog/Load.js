import React from 'react'
import Loader from 'react-loader-spinner';

function Load() {
    return (
        <div className="load"
            style={{
                position: "absolute", left: "45%", marginTop: "260px",
                border: "1px solid silver", padding: "10px",
                backgroundColor: "silver",
                textAlign: "center"
            }}>
            <Loader type="Oval" color="black" height={50} width={50} margin="auto" />
            Veuillez Patienter...
        </div>
    )
}

export default Load
