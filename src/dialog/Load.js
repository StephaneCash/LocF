import React from 'react'
import Loader from 'react-loader-spinner';

function Load() {
    return (
        <div className="load"
            style={{
                position: "absolute", left: "45%", marginTop: "230px",
                border: "1px solid black", padding: "10px",
                backgroundColor: "white",
                textAlign: "center"
            }}>
            <Loader type="Oval" color="black" height={50} width={50} margin="auto" />
            Veuillez Patienter...
        </div>
    )
}

export default Load
