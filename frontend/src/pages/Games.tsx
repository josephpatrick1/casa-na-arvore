import { IonIcon, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardSubtitle } from '@ionic/react';
import React from 'react';
import './Games.css';
import { gameController } from 'ionicons/icons';

const Games: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Games</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">Games</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol>
            <IonCard>
              <img src="https://cutewallpaper.org/21/wallpaper-quiz/TravelToogle-Quiz-2-hiddenplaces-TravelToogle-Quiz-2.png" />
              <IonCardHeader><IonCardTitle>Quiz</IonCardTitle><br />
                Responda perguntas para ganhar nozes<br /><br />
                <IonButton expand="block" color="primary">Jogar	&nbsp;<IonIcon icon={gameController} /></IonButton>
              </IonCardHeader>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <img src="https://cutewallpaper.org/21/wallpaper-quiz/TravelToogle-Quiz-2-hiddenplaces-TravelToogle-Quiz-2.png" />
              <IonCardHeader><IonCardTitle>Quiz</IonCardTitle><br />
                Responda perguntas para ganhar nozes<br /><br />
                <IonButton expand="block" color="primary">Jogar	&nbsp;<IonIcon icon={gameController} /></IonButton>
              </IonCardHeader>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard>
              <img src="https://cutewallpaper.org/21/wallpaper-quiz/TravelToogle-Quiz-2-hiddenplaces-TravelToogle-Quiz-2.png" />
              <IonCardHeader><IonCardTitle>Quiz</IonCardTitle><br />
                Responda perguntas para ganhar nozes<br /><br />
                <IonButton expand="block" color="primary">Jogar	&nbsp;<IonIcon icon={gameController} /></IonButton>
              </IonCardHeader>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <img src="https://cutewallpaper.org/21/wallpaper-quiz/TravelToogle-Quiz-2-hiddenplaces-TravelToogle-Quiz-2.png" />
              <IonCardHeader><IonCardTitle>Quiz</IonCardTitle><br />
                Responda perguntas para ganhar nozes<br /><br />
                <IonButton expand="block" color="primary">Jogar	&nbsp;<IonIcon icon={gameController} /></IonButton>
              </IonCardHeader>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonCard>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Games;
