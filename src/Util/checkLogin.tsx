import { setUserAuth } from '../Util/storage'

export const checkLogin = () => {
    if(window.location.href.indexOf("login") !== -1){
        setUserAuth("0");
    }
}

export const logout = () => {
    setUserAuth("0");
    window.location.href= './login';
}