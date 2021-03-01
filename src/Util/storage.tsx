import { ADMIN, MOTOBOY, ROOT } from "./defines";

const USER_ID       = "userid";
const USER_NAME     = "username";
const USER_TYPE     = "usertype";
const USER_AUTH     = "userauth";
const REST_ID       = "restid";

export const getUserName = () => {return localStorage.getItem(USER_NAME)} 
export const setUserName = (user: string) => {return localStorage.setItem(USER_NAME, user)} 

export const getUserAuth = () => {return localStorage.getItem(USER_AUTH)} 
export const setUserAuth = (auth: string) => {return localStorage.setItem(USER_AUTH, auth)} 

export const getUserId = () => {return localStorage.getItem(USER_ID)} 
export const setUserId = (id: string) => {return localStorage.setItem(USER_ID, id)} 

export const setRestId = (id: string) => {return localStorage.setItem(REST_ID, id)} 
export const getRestId = () => {return localStorage.getItem(REST_ID)} 

export const getUserType = () => {return localStorage.getItem(USER_TYPE);}
export const setUserType = (type: string) => {return localStorage.setItem(USER_TYPE, type)} 
export const getUserTypeToString = () => {
    if(getUserType() === ROOT)      return 'ROOT';
    if(getUserType() === MOTOBOY)   return 'Entregador';
    if(getUserType() === ADMIN)     return 'Adminstrador';    
}
