import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Connexion from './views/Connexion';
import { useState } from "react";
import MainContainer from './views/MainContainer';

function App() {

    const [connex, setConnex] = useState('');

    return (
        <div className="App">
            {
                connex ? <Connexion /> : <MainContainer />
            }
        </div>
    );
}

export default App;
