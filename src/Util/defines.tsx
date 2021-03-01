
const HOST                  = "http://rotadeliveryapi-env.eba-pzfubrpx.sa-east-1.elasticbeanstalk.com/";
const API                   = ""

//users types
export const ROOT           = "99";
export const ADMIN          = "1";
export const MOTOBOY        = "2";
export const GOOGLEAPIKEY   = "AIzaSyBpWbrNZS3bVghQCmkbu2YKqerpk4ddj2I";

//map options 
export const AUTO_RELOAD_MAP    = 0;
export const RELOAD_MAP         = 60000 //milissegundos

//services requests
export const getLogin               = (user: string, passwd: string) => { return HOST+API+"?a=login&u="+user+"&p="+passwd}
export const setLocation            = (id: any, latitude: any, longitude: any) => {             localStorage.setItem("URL", HOST+API+"?a=setLocations&i="+id+"&la="+latitude+"&lo="+longitude);
                                            return HOST+API+"?a=setLocations&i="+id+"&la="+latitude+"&lo="+longitude}
export const getLocation            = () => {return HOST+API+"?a=getLocations"}
export const getUserRestLocation    = (id: string) => {return HOST+API+"?a=getLocations&r="+id}
export const getUserRest            = (id: string) => {return HOST+API+"?a=getRestaurants&u="+id}