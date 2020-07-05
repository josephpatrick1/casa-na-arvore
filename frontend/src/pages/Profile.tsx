import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <br />
        <IonTitle>Perfil</IonTitle>
      </IonContent>
    </IonPage>
  );
};
export default Profile;