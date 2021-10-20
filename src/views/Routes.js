import React from 'react';
import Garages from './Garages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from './Users';
import Pannes from './Pannes';
import Specialistes from "./Specialistes";
import Menu from './Menu';
import EditSpecialist from '../dialog/EditSpecialist';
import AjoutSpecialist from '../dialog/AjoutSpecialist';
import Errors from '../dialog/Errors';
import FindSpecialist from "./FindSpecialist";
import Connexion from './Connexion';

function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Specialistes} />
                    <Route path='/editSpecialist' exact component={EditSpecialist} />
                    <Route path='/ajoutSpecialist' exact component={AjoutSpecialist} />
                    <Route path='/error' exact component={Errors} />
                    <Route path="/garages" exact component={Garages} />
                    <Route path="/users" exact component={Users} />
                    <Route path="/findSpecialist" exact component={FindSpecialist} />
                    <Route path="/pannes" exact component={Pannes} />
                    <Route path="/connexion" exact component={Connexion} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
