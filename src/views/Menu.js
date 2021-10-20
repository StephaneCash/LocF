import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import "../css/Menu.css";

function Menu() {
    return (
        <div className="menu">
            <ul>
                <li>
                    <NavLink className="active" to="/">
                        <center><i className="IconHome fa fa-home "></i></center>
                        Spécialistes
                    </NavLink>
                </li>

                <li>
                    <NavLink  to="/pannes">
                        <center><i className="IconHome fa fa-car "></i></center>
                        Pannes
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/garages">
                        <center><i className="IconHome fa fa-flag "></i></center>
                        Garages
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/users">
                        <center><i className="IconHome fa fa-info "></i></center>
                        Help
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/users">
                        <center><i className="IconHome fa fa-users "></i></center>
                        Users
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/conf">
                        <center><i className="IconHome fa fa-gear "></i></center>
                        Configuration
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu
