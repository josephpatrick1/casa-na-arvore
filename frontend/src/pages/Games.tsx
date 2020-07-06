import { IonIcon, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardSubtitle } from '@ionic/react';
import React from 'react';
import './Games.css';
import { gameController } from 'ionicons/icons';

const Games: React.FC = () => {
  return (
    <IonPage id="gamespage">
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
              <img alt="Game" src="/assets/games/quiz.png" />
              <IonCardHeader><IonCardTitle>Quiz</IonCardTitle><br />
                Responda perguntas para ganhar nozes<br /><br />
                <IonButton routerLink="/abas/games/quiz" expand="block" color="primary">Jogar	&nbsp;<IonIcon icon={gameController} /></IonButton>
              </IonCardHeader>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <img alt="Game" src="/assets/games/soletrando.jpg" />
              <IonCardHeader><IonCardTitle>Soletrando</IonCardTitle><br />
                Responda como soletrar a palavra corretamente<br /><br />
                <IonButton routerLink="/abas/games/quiz" expand="block" color="primary">Jogar	&nbsp;<IonIcon icon={gameController} /></IonButton>
              </IonCardHeader>
            </IonCard>
          </IonCol>
          
        </IonRow>
        <IonRow>
        <IonCol>
            <IonCard>
              <img alt="Game" src="/assets/games/quallivro.jpg" />
              <IonCardHeader><IonCardTitle>Qual é o Livro</IonCardTitle><br />
                Descobra qual é o livro<br /><br />
                <IonButton routerLink="/abas/games/quiz" expand="block" color="primary">Jogar	&nbsp;<IonIcon icon={gameController} /></IonButton>
              </IonCardHeader>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <img alt="Game" src="/assets/games/ra.jpg" />
              <IonCardHeader><IonCardTitle>Realidade Aumentada</IonCardTitle><br />
                Veja os personagens de seus livros favoritos pela câmera!<br /><br />
                <IonButton routerLink="/abas/games/quiz" expand="block" color="primary">Jogar	&nbsp;<IonIcon icon={gameController} /></IonButton>
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
