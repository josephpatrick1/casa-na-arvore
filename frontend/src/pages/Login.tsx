import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Login.css';

const Login: React.FC = () => {
return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton />
        </IonButtons>
        <IonTitle>Login</IonTitle>
        </IonToolbar>
    </IonHeader>

    <IonContent>
        <IonHeader collapse="condense">
        <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
        </IonToolbar>
        </IonHeader>
        <br />
        <IonTitle>Login</IonTitle>
    </IonContent>
    </IonPage>
);
};
export default Login;
