import { IonButtons, IonCardContent, IonContent, IonIcon, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import { cash } from "ionicons/icons"
import React from 'react';

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Notificações</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">Notificações</IonTitle>
          </IonToolbar>
        </IonHeader>
        <br />
        <IonTitle><i>Você não possui Notificações.</i></IonTitle>
        <br />

        <IonCard color="primary">
          <IonCardHeader>
            <IonCardTitle id="inline"><i>Loja</i></IonCardTitle>{"          "}
            <IonIcon icon={cash} />
            <IonCardSubtitle><strong>Gaste suas nozes aqui.</strong></IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent id="l">
            <IonTitle className="tc">Plano de fundo: <small>(10 nozes)</small></IonTitle>
            <IonButton color="dark">Escuro</IonButton>
            <IonButton color="secondary">Azul</IonButton> <br />
            <IonButton color="tertiary">Azul escuro</IonButton>
            <IonButton color="success">Verde</IonButton> <br />
            <IonButton color="warning">Amarelo</IonButton>
            <IonButton color="danger">Vermelho</IonButton> <br />
            <IonButton color="light">Branca</IonButton>
            <IonButton color="medium">Cinza</IonButton> <br />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Notifications;
