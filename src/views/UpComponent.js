import React from 'react'
import "../css/UpComponent.css";

function UpComponent() {
    return (
        <div className="upComponent ">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3">
                        <div className="" style={{
                            border: '1px solid #494949', height: "28px", textAlign: "center",
                            lineHeight: "28px"
                        }}>
                            LOC SPEC
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-3" style={{ lineHeight: "28px", float: "right" }}>
                        Stéphane KIKONI <i className="fa fa-user"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpComponent
