import React from 'react'

function Garages() {
    return (
        <div className="centerData">
            GARAGES LIST
            <hr></hr>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Pannes</th>
                        <th>Proprio</th>
                        <th>Tarif</th>
                        <th>Sponsors</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

            <div class="container-fluid admin">
                <div class="col-md-12 alert alert-primary">Liste de professeurs</div>
                <button class="btn btn-primary bt-sm" id="new_faculty"><i class="fa fa-plus"></i> Ajouter nouveau</button>
                <br />
                <br />
                <div class="card">
                    <div class="card-body">
                        <table class="table table-bordered" id='table'>
                            <colgroup>
                                <col width="10%" />
                                <col width="40%" />
                                <col width="30%" />
                                <col width="20%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nom</th>
                                    <th>Matière(Cours)</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Garages
