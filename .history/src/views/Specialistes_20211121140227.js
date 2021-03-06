import React from 'react'
import {
    useState,
    useEffect
} from "react";
import "../css/Specialistes.css";
import ApiSpecialiste from '../api/ApiSpecialiste';
import {
    Link, useHistory
} from 'react-router-dom';
import Load from '../dialog/Load';
import Menu from './Menu';



function Specialistes() {

    let history = useHistory()

    const [data, setData] = useState([]); // Data venant de l'API (specialist)
    const [valueSearch, setValueSearch] = useState(""); // Value de l'input search
    const [etat, setEtat] = useState(false);
    const [id, setId] = useState("");

    const fetchData = () => {
        ApiSpecialiste.getAllSpecialistes().then(res => {
            const specialistes = res.data;
            setEtat(true)
            setData(specialistes);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (e) => {
        let value = e.target.value;
        setValueSearch(value.toLowerCase());
    }
    //Changer La valeur de state à false pour fermer le modal d'ajout

    const trouverUnSpecialiste = () => {
        history.push('/findSpecialist');
    }

    const check = () => {
        console.log("Check")
    }

    const detailSpecialist = () => {

    }

    return (
        <div className="col-md-12" style={{ backgroundColor: "#f0f0f0", margin: "0px" }}>
            <div className="row">
                <div className="col-md-1 menu">
                    <Menu />
                </div>
                <div className="col-md-11 contentGeneral">
                    <div className="topPart">
                        {
                            etat === false ? <Load /> : ""
                        }
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="" style={{ marginTop: "-6px", marginLeft: "-13px" }} > LISTE DE SPECIALISTES EN DEPANNAGE AUTOMOBILE <i className="fa fa-car"> </i></h5 >
                                </div>
                                <div className="col-md-6">

                                </div>
                            </div>
                        </div>
                        <hr />

                        <p class="text" style={{ padding: "10px" }}>
                            Ceci est une liste de meilleurs Spécialistes en dépannage automobile dans le district de LUKUNGA </p>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6" style={{ marginLeft: "-1.3%" }}>
                                    <button className="btn btn-primary" onClick={trouverUnSpecialiste}> Trouver un spécialiste </button>
                                    <Link to="/ajoutSpecialist">
                                        <button className="btn btn-success" style={{ marginLeft: "10px" }}>
                                            <i className="fa fa-plus"> </i> Ajouter spécialiste</button >
                                    </Link>
                                </div>
                                <div className="col-md-2" ></div>
                                <div className="col-md-4" style={{ position: "absolute", right: "-14px" }}>
                                    <div class="search-field">
                                        <div class="input-group mb-2">
                                            <input type="text" class="form-control inputSearchB" placeholder="Rechercher"
                                                onChange={handleSearch} />
                                            <div class="input-group-append">
                                                <i class="input-group-text fa fa-search" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="tableContent">
                        <table className="table table" >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th> Id </th>
                                    <th> Nom </th>
                                    <th> Postnom </th>
                                    <th > Prenom </th>
                                    <th> Spécialité </th>
                                    <th style={{ width: "12%" }}> Opérations </th>

                                </ tr>
                            </thead> <tbody>
                                {
                                    data.filter((val) => {
                                        return val.nom.toLowerCase().includes(valueSearch) || val.postnom.toLowerCase().includes(valueSearch);
                                    }).map(val => {
                                        return (<tr key={val.id}>
                                            <td>
                                                <input type="checkbox" onClick={check} className="check-item" />
                                            </td>
                                            <td> {val.id} </td>
                                            <td> {val.nom} </td>
                                            <td> {val.postnom} </td>
                                            <td> {val.prenom} </td>
                                            < td> Dépanneur de pneux </td>
                                            <td>< Link to={{
                                                pathname: '/editSpecialist',
                                                state: { id: val.id }
                                            }}>
                                                <button className="btn btn btn" > <i className="fa fa-edit" > </i></button > </Link>
                                                <button className="btn btn btn"
                                                    onClick={
                                                        () => {
                                                            setEtat(false)
                                                            if (window.confirm("Etes-vous sûr de vouloir supprimer ?")) {
                                                                setEtat(true)
                                                                ApiSpecialiste.deleteSpecialiste(val.id)
                                                                    .then(fetchData)
                                                                    .catch(err => {
                                                                        alert("Echec de suppression");
                                                                    })
                                                            }
                                                            setEtat(true)
                                                        }
                                                    }> <i className="fa fa-trash" > </i></button >
                                                <button
                                                    className="btn btn btn"
                                                    onClick={data => setId(val.id)}
                                                    style={{ marginLeft: "5px", width: "37px" }}>
                                                    <i className="fa fa-info"></i>
                                                </button>
                                            </td>

                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table >
                    </div>
                    <div className="detail">
                        <table className="table table ">
                            <thead>
                                DETAILS
                            </thead>
                            {
                                id ? <> <tbody>
                                    {
                                        data.map(el => {
                                            if (el.id === id) {
                                                return <div>
                                                    {el.description}
                                                </div>
                                            }
                                        })
                                    }
                                </tbody></> : <>
                                    <tbody>
                                        Sélectionne un élément svp !
                                    </tbody>
                                </>
                            }

                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Specialistes