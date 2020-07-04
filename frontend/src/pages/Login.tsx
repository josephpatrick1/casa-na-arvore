import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, { useState, useContext, FormEvent, ChangeEvent } from 'react';
import './Login.css';

import {Context} from "../Context/AuthContext"

const Login: React.FC = () => {

    const { handleLogin } = useContext(Context);
        
    const [email, setEmail] = useState("")
    // const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    function handleEmail(event: ChangeEvent<HTMLInputElement>) {
        const Email = event.target.value
        setEmail(String(Email))
    }

    function handlePassword(event: ChangeEvent<HTMLInputElement>) {
        const Password = event.target.value
        setPassword(String(Password))
    }

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
                <form id="f">
                    <legend>Contact Info</legend>
                    <input type="email" placeholder="Email" value={email} onChange={handleEmail} required />
                    <br/>
                    <input type="password" onChange={handlePassword} value={password} placeholder="Password" required />
                    <br/>
                    <input type="submit" onClick={handleSubmit} value="Become a Ninja" />
                </form>
            </IonContent>
        </IonPage>
    );
};
export default Login;
