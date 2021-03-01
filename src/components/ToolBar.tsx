import React from 'react';
import { getUserType, getUserAuth } from '.././Util/storage'
import { IonHeader, IonSegment, IonSegmentButton,  IonToolbar } from '@ionic/react';
import { logout } from '../Util/checkLogin';
import { ADMIN, MOTOBOY } from '../Util/defines';


const goRest = () =>{
  window.location.href = './SelectRest';
}
export const toolBar = () => {
    if(getUserAuth() === null || getUserAuth() === "0") return <></>;
    else if (getUserType() === MOTOBOY){
      return (
        <IonHeader>
          <IonToolbar>
            <IonSegment>          
            <IonSegmentButton value="logou" onClick={logout}>Sair</IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        </IonHeader>    
      )
    }
    else if(getUserType() === ADMIN){
      return (
        <IonHeader>
          <IonToolbar>
            <IonSegment>
            <IonSegmentButton value="restaurante" onClick={goRest}>Restaurantes</IonSegmentButton>
            <IonSegmentButton value="logou" onClick={logout}>Sair</IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        </IonHeader>    
      )
    }
  }

  //<IonSegmentButton value="mapa" onClick={goMap}>Mapa</IonSegmentButton>