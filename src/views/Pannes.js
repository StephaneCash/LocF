import React from 'react'
import { useState, useEffect } from 'react';

function Pannes() {

    const [data, setData] = useState([]);

    let url = "http://localhost:8000/api/specialites/";

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
    }, []);


    let a = data.forEach(val => {
        //console.log(val.specialistes[0])
        val.specialistes.forEach(val2 => {
            console.log(val2.nom)
        })
    })

    console.log(a)
    return (
        <div className="centerData">
            <h5>Différentes spécialités</h5>
            <hr style={{ marginRight: "35px !important" }}></hr>

            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>nom</th>
                        <th>Déscription</th>
                        <th>Spécialistes</th>
                        <th style={{ width: '170px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.nom}</td>
                                    <td>{data.description}</td>
                                    {
                                        data.specialistes.map(el => {
                                            return <td>{el.nom} {el.postnom}</td>
                                        })
                                    }
                                    <td>
                                        <button className="btn btn-primary" ><i className="fa fa-plus"></i></button>
                                        <button className="btn btn-success"><i className="fa fa-edit"></i></button>
                                        <button className="btn btn-danger" ><i className="fa fa-trash"></i></button>
                                    </td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Pannes
