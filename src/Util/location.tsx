import { setLocation } from './defines'
import { getUserId } from '../Util/storage'

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';



//https://www.npmjs.com/package/react-native-background-fetch
//https://www.npmjs.com/package/cordova-plugin-background-fetch
//https://github.com/jamesisaac/react-native-background-task


export async function  sendLocation(){
      
    const position = await Geolocation.getCurrentPosition();
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
        
    if(getUserId() != null){
      fetch(setLocation(getUserId(), position.coords.latitude, position.coords.longitude),{
        method: 'GET'      
      })
    }


}




