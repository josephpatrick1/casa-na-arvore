import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonButton,
    IonItem,
    IonInput,
    IonLabel,
    IonRow,
    IonCol
} from '@ionic/react';
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

            <IonContent className="ion-padding">
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Entrar</IonTitle>
                    </IonToolbar>
                </IonHeader>

                
                <br />
                <br />
                <br />
                <IonTitle>Fazer Login</IonTitle>

                <br />
                <IonLabel position="floating">E-mail</IonLabel>
                        <IonInput type="email"></IonInput>

                        <br />

                        <IonLabel position="floating">Senha</IonLabel>
                        <IonInput type="password"></IonInput>

                        <br />
                <IonButton type="submit" expand="block">Entrar</IonButton>
                <IonButton routerLink="/signup" color="light" expand="block">Cadastrar</IonButton>


            </IonContent>
        </IonPage>
    );
};
export default Login;
