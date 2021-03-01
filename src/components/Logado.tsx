import React, { Component } from 'react';
import { IonLabel} from '@ionic/react';
import './main.css';
import { getUserName, getUserTypeToString } from '../Util/storage';


class Logado extends Component{
    render(){
        return(
            <>
                <div className="container login_box">
                    <br></br>
                    <br></br>
                    <br></br>                    
                    <IonLabel>Logado como: {getUserName()}</IonLabel><br></br>
                    <IonLabel>Função: {getUserTypeToString()}</IonLabel><br></br>
                    <IonLabel>URL {localStorage.getItem("URL")}</IonLabel><br></br>
                    <IonLabel>Aplicativo em funcionamento</IonLabel>
                </div>
            </>
        )
    }
}

export default Logado;
