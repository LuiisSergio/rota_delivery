import React from 'react';
import Login from '../components/Login';
import Logado from '../components/Logado';
import SelectRest  from '../components/SelectRest';
import { ADMIN, MOTOBOY, ROOT } from './defines';
import { Route  }  from 'react-router-dom';
import { getUserName, getUserType, getUserAuth } from '../Util/storage';
import  Maps  from '../components/map'
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


export const getRoutes = () => {
  
  if( getUserName() === null || getUserType() === null || getUserAuth() === null || getUserAuth() === "0"){
    return  <Login />;
  }
  if(getUserType() === ADMIN || getUserType() === ROOT){
    return (
      <IonReactRouter>    
        <IonRouterOutlet>
          <Route path="/maps" ><Maps /></Route>
          <Route path="/login" ><Login /></Route>       
          <Route exact path="/" ><Login /></Route>
          <Route path="/logado" ><Logado /></Route> 
          <Route path="/selectRest" ><SelectRest /></Route> 
        </IonRouterOutlet>
      </IonReactRouter>
    )
  }else if(getUserType() === MOTOBOY){
    return (
       <IonReactRouter>    
        <IonRouterOutlet>
          <Route path="/login" ><Login /></Route>       
          <Route exact path="/" ><Login /></Route>  
          <Route path="/logado" ><Logado /></Route> 
        </IonRouterOutlet>    
      </IonReactRouter>   
    )
  }else{
    return <Login />
  }
}
