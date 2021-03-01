/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import React, { Component} from 'react';
import { getRoutes } from './Util/getRoutes';
import { toolBar } from './components/ToolBar'
import { IonApp } from '@ionic/react';
import { checkLogin } from './Util/checkLogin';
import { getUserId } from './Util/storage'
import { setLocation } from './Util/defines'
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { BackgroundMode } from '@ionic-native/background-mode';


//import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';



export default class App extends Component { 
  private backgroundMode: any;
  constructor(backgroundMode: any) { super(backgroundMode);}

  public async  sendLocation(){
    //const position = await Geolocation.getCurrentPosition();
      if(getUserId() != null){
        //fetch(setLocation(getUserId(), position.coords.latitude, position.coords.longitude),{
        fetch(setLocation(getUserId(), -1, -1),{
        method: 'GET'      
      })
    }


  }
  public post(){
    //BackgroundMode.enable();
    this.backgroundMode.enable();
    this.backgroundMode.on("activate").subscribe(()=>{
      this.sendLocation();
    });
    
  }
  render() {
    return (
      <IonApp>
        {setInterval(() => this.sendLocation(), 2000)}
        {checkLogin()}   
        {toolBar()}
        {getRoutes()}
      </IonApp>
      )
  }
}