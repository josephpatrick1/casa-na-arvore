import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  homeOutline,
  homeSharp,
  personOutline,
  personSharp,
  gameControllerOutline,
  gameControllerSharp,
  notificationsOutline,
  notificationsSharp
} from 'ionicons/icons';

import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Início',
    url: '/abas/inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Perfil',
    url: '/abas/perfil',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Games',
    url: '/abas/games',
    iosIcon: gameControllerOutline,
    mdIcon: gameControllerSharp
  },
  {
    title: 'Notificações',
    url: '/abas/notificacoes',
    iosIcon: notificationsOutline,
    mdIcon: notificationsSharp
  }
];

//const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  let menu;

  console.log(location.pathname);
  if (location.pathname.indexOf("/abas") >= 0) {
    menu = <IonMenu contentId="main" type="overlay">
    <IonContent>
      <IonList id="inbox-list">
        <IonListHeader>Casa na Árvore</IonListHeader>
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      </IonList>
    </IonContent>
  </IonMenu>;
  }
  else {
    menu = <IonMenu contentId="main" type="overlay">
    <IonContent>
      <IonList id="inbox-list">
        <IonListHeader>Casa na Árvore</IonListHeader>
      </IonList>
    </IonContent>
  </IonMenu>;
  }

  return (menu);
};

export default Menu;
