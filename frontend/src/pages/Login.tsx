import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonInput,
    IonLabel,
    IonList
} from '@ionic/react';
import React, { useState, useContext, FormEvent, ChangeEvent } from 'react';
import './Login.css';

import {Context} from "../Context/AuthContext"

const Login: React.FC = () => {

    const { handleLogin } = useContext(Context);
        
    const [email, setEmail] = useState("")
    // const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    // function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    //     const Email = event.target.value
    //     setEmail(String(Email))
    // }

    // function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    //     const Password = event.target.value
    //     setPassword(String(Password))
    // }

    // function handleName(event: ChangeEvent<HTMLInputElement>) {
    //     const Name = event.target.value
    //     setName(Name)
    // }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const data = {
        // name,
        email,
        password
        }

        console.log(data)

        handleLogin(data)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Entrar</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)}></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput value={password} type="password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
            </IonItem>
        </IonList>

        <IonButton color="primary" onClick={handleSubmit} >Login</IonButton>

            </IonContent>
        </IonPage>
    );
};
export default Login;
