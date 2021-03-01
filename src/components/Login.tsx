import React, { Component } from 'react';
import './ExploreContainer.css';
import { Redirect } from 'react-router'
import './main.css';
import { setUserName, setUserType, setUserAuth, setUserId } from '../Util/storage'
import { IonButton } from '@ionic/react';
import { IonItem, IonLabel, IonInput} from '@ionic/react';
import { getLogin } from '../Util/defines'


interface ContainerProps { }

class Login extends Component {
  state = {
    login: 
      {
        user: '',
        passwd: '',
        type: '',
        auth: false
      }     
  }
  
  
  
  handleChange = (event: any) => {
    const { name, value } = event.target;
    this.setState({ login: { ...this.state.login, [name]: value , auth: false} })
  };
  
  handleSubmit = (event: any) => {
    event.preventDefault();    
    const user    = this.state.login.user;
    const passwd  = this.state.login.passwd;
    fetch(getLogin(user, passwd),{
      method: 'GET'      
      
    })
      .then(request => request.json())
      .then(data    => {
        this.setState({login:{...this.state.login, 
                                  auth: true,
                                  id: data[0].id,
                                  type: data[0].type}});
        setUserId(data[0].id);
        setUserName(this.state.login.user);
        setUserType(data[0].type);
        setUserAuth("1"); 
        window.location.href= './logado';
        //if(data[0].type == ADMIN || data[0].type == ROOT)      
        //  window.location.href= './SelectRest';
        //else
        window.location.href= './logado';
      })
  }
  redirect = () =>{
    if(this.state.login.auth)
    return(
    <Redirect to={{
      pathname: './SelectRest',
      state: this.state
    }} />
    )
  }
 
  render () {
    
    return(
      
      <>
        <div className="container login_box">
          <div className="formBox">
          <form method="post" onSubmit={this.handleSubmit}>
            <IonItem >
              <IonLabel>User:</IonLabel>
              <IonInput className="login_text" type="text" name="user" onIonChange={this.handleChange} value={this.state.login.user} />
            </IonItem>
            <IonItem>
              <IonLabel >Password:</IonLabel>
              <IonInput className="login_text" type="password" name="passwd" onIonChange={this.handleChange} value={this.state.login.passwd} />
            </IonItem>
            <IonItem>
              <IonButton className="ion-float-right loginButton" type="submit" size="small" color="success" >Login</IonButton>
            </IonItem>
          </form>
          </div>
        </div>    
      </>
    )
  }
};

export default Login;
