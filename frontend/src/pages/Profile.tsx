import React, { useState, useEffect } from 'react';

import './Friend.css';

import { ActionSheetButton } from '@ionic/core';
import { IonMenuButton, IonCard, IonCardContent, IonItem, IonAvatar, IonRow, IonCol, IonProgressBar, IonActionSheet, IonChip, IonIcon, IonHeader, IonLabel, IonToolbar, IonButtons, IonContent, IonButton, IonPage, IonLoading } from '@ionic/react'
import { logoWhatsapp, personAdd, personAddOutline, book, logoLinkedin  } from 'ionicons/icons';

import api from "../services/api"

interface iData {
  User: {
    name: string,
    xp: number,
    foto_url: string,
    descricao: string,
    nozes: number,
    Nivel: number,
    elos: string
  },
  Amigos: {
    id: number,
    name: string,
    foto_url: string
  }[],
  Comments: {
    comentario: string,
    nota: number,
    arquivo_url: string,
    titulo: string
  }[]
}

const Friend: React.FC = () => {

  const [data, setData] = useState<iData>()

  useEffect(() => {
    api.get("user").then( (response: any) => {
      setData(response.data)
    })
  }, [])


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

  function openExternalUrl(url: string) {
    window.open(url, '_blank');
  }

  console.log(data)

  if (!data) {
    return <IonLoading isOpen />
  }

  if (!data.User) {
    return <IonLoading isOpen />
  }

  if (!data.Amigos) {
    return <IonLoading isOpen />
  }

  if (!data.Comments) {
    return <IonLoading isOpen />
  }

  return (
    <IonPage id="speaker-detail">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={() => openSpeakerShare("Compartilhar")}>
                <IonIcon slot="icon-only" ios={personAddOutline} md={personAdd}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        
        

        <div className="speaker-background">
          <img src={"https://cdn.discordapp.com/attachments/725067926574727279/729378236613787668/tadeu.jpg"} alt={"nome do usuario"}/>
          <h2>{data.User.name}</h2>
        </div>

        <div className="ion-padding speaker-detail">

          <br />
          <IonRow>
            <IonCol size="3">
              <img src={`http://localhost:3333/uploads/elos/${data.User.elos}`} alt={"nome do usuario"}/>
            </IonCol>
            <IonCol size="9">

            <img width="15" height="15" src="/assets/star.svg" alt="Estrela"/>
              &nbsp;{`Level ${data.User.Nivel}`} <br />
              
              <img width="15" height="15" src="/assets/nutnut.svg" alt="Nozes"/>
              &nbsp;{`${data.User.nozes} Nozes`} <br />
              <IonProgressBar color="secondary" value={(data.User.xp-(data.User.Nivel*1000))/1000}></IonProgressBar><br />
              <div className="ion-float-left">{data.User.xp} XP</div>
              <div className="ion-float-right">{(data.User.xp + 1000)} XP</div>
            </IonCol>
          </IonRow>

          <hr/>
          <p>{data.User.descricao}</p>
          <hr/>

        <IonChip color="secondary" onClick={() => openExternalUrl('https://www.linkedin.com/in/tadeu-agostini-498826147/')}>
          <IonIcon icon={logoLinkedin}></IonIcon>
          <IonLabel>Linkedin</IonLabel>
        </IonChip>
        <IonChip color="primary" onClick={() => openExternalUrl('whatsapp://send?phone=48996249352&text=Óla Tadeu')}>
          <IonIcon icon={logoWhatsapp}></IonIcon>
          <IonLabel>Whatsapp</IonLabel>
        </IonChip>
          <hr/>

          <h3>Amigos</h3>

        {  
          data.Amigos.map((amigo, index) => (
            <IonItem key={index}>
              <IonAvatar slot="start">
                <img src={`http://localhost:3333/uploads/users/${amigo.foto_url}`} alt={amigo.foto_url} />
              </IonAvatar>
              <IonLabel>{amigo.name}<br /><IonButton color="primary">Ver Perfil</IonButton></IonLabel>
            </IonItem>
          ))
        }
          
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
}

export default Friend