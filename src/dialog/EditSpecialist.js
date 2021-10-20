import React from 'react'
import { useState, useEffect } from "react"
import ApiSpecialiste from '../api/ApiSpecialiste';
import { useHistory, useParams } from "react-router-dom"
import { useLocation } from "react-router";

function EditSpecialist() {

    const [nom, setNom] = useState("");
    const [postnom, setPostnom] = useState("");
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState("");
    const [specialite_id, setSpecialite_id] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");
    const [dataFind, setDataFind] = ('');

    const location = useLocation();

    const id = location.state.id;

    const history = useHistory();

    console.log('LOCATION YOLA: ', id)

    useEffect(() => {
        ApiSpecialiste.getAllSpecialistes().then(res => {
            const specialistes = res.data;
            setData(specialistes);
        })
    }, []);



    const onEditSubmit = async () => {
        setLoading(true);

        try {
            await ApiSpecialiste.updateSpecialiste({
                nom, postnom, prenom, adresse, specialite_id,
            }, id)
            history.push("/");
        } catch {
            alert("Echec de mise à jour de spécialiste")
        } finally {
            setLoading(false);
        }
    }



    console.log("DATA : ", data)

    return (
        <div className="container mainDiv">
            <h3 style={{ border: "1px solid silver", padding: "10px", marginBottom: "40px" }}>Modifier spécialiste</h3>
            <div className="" style={{ border: "1px solid silver", padding: "30px" }}>

                <div className="form-group">
                    <label>Nom : </label>
                    <input className="form-control" type="text" placeholder="Nom"
                        value={nom}
                        onChange={e => setNom(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postnom">Postnom : </label>
                    <input className="form-control" type="text" placeholder="Nom" id="postnom"
                        value={postnom} onChange={e => setPostnom(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prenom">Prénom : </label>
                    <input className="form-control" type="text" placeholder="Prénom" id="prenom"
                        value={prenom} onChange={e => setPrenom(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Entrer une adresse</label>
                    <textarea className="form-control" type="text" placeholder="Adresse" value={adresse} onChange={e => setAdresse(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label>Selectionner une spécialité</label>
                    <input className="form-control" type="Number" value={specialite_id} onChange={e => setSpecialite_id(e.target.value)} placeholder="Adresse"></input>
                </div>

                <button className="btn btn buttonEditer" onClick={onEditSubmit}>Editer ce spécialiste</button>
            </div>

        </div>
    )
}

export default EditSpecialist
