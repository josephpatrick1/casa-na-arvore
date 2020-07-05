import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import './Friend.css';

import { ActionSheetButton } from '@ionic/core';
import { IonSegment, IonSegmentButton, IonCard, IonCardContent, IonItem, IonAvatar, IonRow, IonCol, IonProgressBar, IonActionSheet, IonChip, IonIcon, IonHeader, IonLabel, IonToolbar, IonButtons, IonContent, IonButton, IonBackButton, IonPage } from '@ionic/react'
import { logoWhatsapp, logoInstagram, personAdd, personAddOutline, book  } from 'ionicons/icons';


interface UserData {    
  UserID?: String;
};



const Friend: React.FC<UserData> = ({ UserID }) => {

  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<ActionSheetButton[]>([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');

  function openSpeakerShare(speaker: any) {
    setActionSheetButtons([
      {
        text: 'Copy Link',
        handler: () => {
          console.log('Copy Link clicked');
        }
      },
      {
        text: 'Share via ...',
        handler: () => {
          console.log('Share via clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]);
    setActionSheetHeader(`Share ${speaker.name}`);
    setShowActionSheet(true);
  }

  function openContact(speaker: any) {
    setActionSheetButtons([
      {
        text: `Email ( ${speaker.email} )`,
        handler: () => {
          window.open('mailto:' + speaker.email);
        }
      },
      {
        text: `Call ( ${speaker.phone} )`,
        handler: () => {
          window.open('tel:' + speaker.phone);
        }
      }
    ]);
    setActionSheetHeader(`Share ${speaker.name}`);
    setShowActionSheet(true);
  }

  function openExternalUrl(url: string) {
    window.open(url, '_blank');
  }

  if (!UserID) {
    return <div>Usuário Não Encontrado</div>
  }

  return (
    <IonPage id="speaker-detail">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tabs/speakers" />
            </IonButtons>
            <IonButtons slot="end">
              {/*<IonButton onClick={() => openContact("telefone")}>
                <IonIcon slot="icon-only" ios={personAddOutline} md={personAdd}></IonIcon>
              </IonButton>*/}
              <IonButton onClick={() => openSpeakerShare("Compartilhar")}>
                <IonIcon slot="icon-only" ios={personAddOutline} md={personAdd}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        
        

        <div className="speaker-background">
          <img src={"https://cdn.discordapp.com/attachments/725067926574727279/729378236613787668/tadeu.jpg"} alt={"nome do usuario"}/>
          <h2>{"🌰 Tadeu Agostini 🌰"}</h2>
        </div>
        
        <IonSegment value="1" onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="1">
            <IonLabel>Perfil</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="2">
            <IonLabel>Amigos</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="3">
            <IonLabel>Clubs</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <div className="ion-padding speaker-detail">

          <br />
          <IonRow>
            <IonCol size="3">
              <img src={"https://cdn.discordapp.com/attachments/725070233752174705/729385147702575204/casa-na-arvore-13.svg.png"} alt={"nome do usuario"}/>
            </IonCol>
            <IonCol size="9">

            <img width="15" height="15" src="/assets/star.svg" alt="Estrela"/>
              &nbsp;Level 4 <br />
              
              <img width="15" height="15" src="/assets/nutnut.svg" alt="Nozes"/>
              &nbsp;20 Nozes <br />
              <IonProgressBar color="secondary" value={0.5}></IonProgressBar><br />
              <div className="ion-float-left">4000 XP</div>
              <div className="ion-float-right">5000 XP</div>
            </IonCol>
          </IonRow>

          <hr/>
          <p>{"🌰🌰🌰 Apaixonado por Nozes 🌰🌰🌰!"}</p>
          <hr/>

<IonChip color="secondary" onClick={() => openExternalUrl('https://instagram.com/ionicframework')}>
  <IonIcon icon={logoInstagram}></IonIcon>
  <IonLabel>Instagram</IonLabel>
</IonChip>
<IonChip color="primary" onClick={() => openExternalUrl('https://instagram.com/ionicframework')}>
  <IonIcon icon={logoWhatsapp}></IonIcon>
  <IonLabel>Whatsapp</IonLabel>
</IonChip>
          <hr/>

          <h3>Amigos</h3>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>Joseph<br /><IonButton color="primary">Ver Perfil</IonButton></IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>Illyana<br /><IonButton color="primary">Ver Perfil</IonButton></IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>Rafael<br /><IonButton color="primary">Ver Perfil</IonButton></IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>Jaqueline<br /><IonButton color="primary">Ver Perfil</IonButton></IonLabel>
          </IonItem>
          
          <h3>Clubes de Leitura</h3>

          <IonCard>
            <IonItem>
              <IonIcon icon={book} slot="start" />
              <IonLabel>Degustadores de Nozes</IonLabel>
              <IonButton fill="outline" slot="end">Ver</IonButton>
            </IonItem>

            <IonCardContent>
                Club para quem degusta nozes lendo livros de Mitologia Grega!
            </IonCardContent>

          </IonCard>

          <IonCard>
            <IonItem>
              <IonIcon icon={book} slot="start" />
              <IonLabel>TI do IFSC 🤯</IonLabel>
              <IonButton fill="outline" slot="end">Ver</IonButton>
            </IonItem>

            <IonCardContent>
                Club criado para os estudantes de TI do Instituto Federal de Santa Catarina
            </IonCardContent>

          </IonCard>

        </div>
      </IonContent>
      <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />
    </IonPage>
  );
};

export default Friend