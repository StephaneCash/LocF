import React from 'react'
import "../css/AjoutSpecilist.css";
import ApiSpecialiste from '../api/ApiSpecialiste';
import { useState } from "react";
import { useHistory } from "react-router-dom"
import Menu from '../views/Menu';

function AjoutSpecialist() {

    const [nom, setNom] = useState("");
    const [postnom, setPostnom] = useState("");
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState("");
    const [specialite_id, setSpecialite_id] = useState("");
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState("");

    const history = useHistory();

    const onEditSubmit = async () => {
        setTimeout(() => {
            setLoading(true);
        }, 300)
        try {
            await ApiSpecialiste.addSpecialiste({
                nom, postnom, prenom, adresse, description, specialite_id
            })
            history.push("/");
        } catch {
            alert("Echec d'enregistrement de spécialiste")
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="">
                <Menu></Menu>
            </div>
            <div className="container mainDiv">
                <div style={{ fontSize: '28px', border: "1px solid silver", marginBottom: '20px', padding: '10px' }}>
                    Ajouter un spécialiste
                </div>

                <div style={{ border: "1px solid silver", padding: "30px" }}>

                    <div className="form-group">
                        <label>Nom : </label>
                        <input className="form-control" type="text" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postnom">Postnom : </label>
                        <input className="form-control"
                            type="text" placeholder="Nom"
                            id="postnom" value={postnom}
                            onChange={e => setPostnom(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prénom : </label>
                        <input className="form-control" type="text" placeholder="Prénom" id="prenom" value={prenom}
                            onChange={e => setPrenom(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Entrer une adresse</label>
                        <textarea className="form-control" type="text" placeholder="Adresse" value={adresse}
                            onChange={e => setAdresse(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Entrer une description</label>
                        <textarea className="form-control" type="text" placeholder="Description" value={description}
                            onChange={e => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Selectionner une spécialité</label>
                        <input className="form-control" type="Number" placeholder="Une spécialité" value={specialite_id}
                            onChange={e => setSpecialite_id(e.target.value)}
                        />
                        <button
                            className="btn btn buttonEditer"
                            onClick={onEditSubmit}>
                            {
                                loading ? <>
                                    <i className="fa fa-refresh fa-spin">
                                    </i>
                                    Patienter...</> : "Ajouter un spécialiste"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AjoutSpecialist
