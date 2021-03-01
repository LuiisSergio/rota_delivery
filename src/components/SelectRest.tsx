import React, { Component } from 'react';
import { IonItem, IonLabel,  IonSelectOption , IonSelect} from '@ionic/react';
import { Redirect } from 'react-router'
import { getUserId, getUserType, getUserAuth } from '../Util/storage'
import { getUserRest, ROOT, ADMIN  } from '../Util/defines'
import { setRestId } from '../Util/storage'
import './main.css';
import { IonButton } from '@ionic/react';


class SelectRest extends Component { 
    
    state = {
        selected: -1,
        restaurants: []
    }
   
    componentDidMount(){
        fetch(getUserRest(String(getUserId())))
          .then(request => request.json())
          .then(data    => {
            const rest = data.map((r: any) => ({
                id: r.id,
                name: r.name
            }))
            this.setState({ restaurants: rest});
          })
          
    }
    
    setRest(id: any){
        setRestId(id);
        this.setState({ selected: id});
    }
    
    toMap(){
          return window.location.href = "maps";    
    }

    render () {
        if(getUserAuth() === "0")
            return <Redirect to="login" />        
        else if (getUserType() !== ADMIN && getUserType() !== ROOT )
            return <Redirect to="active" />
        else
            return(
                <div className="container login_box  ">
                    <div className="formBox"> 
                        <IonItem>
                            <IonLabel>Restaurante: </IonLabel>
                            <IonSelect  onIonChange={e => this.setRest(e.detail.value)}>
                                
                                {this.state.restaurants.map((rest: any)=>(
                                    <IonSelectOption value={rest.id.toString()} >{rest.name.toString()}</IonSelectOption>
                                ))}                           
                            </IonSelect>
                        </IonItem>  
                        <IonButton className="ion-float-right loginButton" type="submit" onClick={this.toMap} color="success">Next</IonButton>            
                    </div>                    
                </div>      
            )
      }
}

export default SelectRest;