import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLoading, IonText } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Home.css';

import api from "../services/api"
import { key } from 'ionicons/icons';

const Home: React.FC = () => {
  const [data, setData] = useState<any>([] as any)

  useEffect(() => {
    api.get("user-home").then( response => {
      setData(response.data.categorias)
    })
  }, [])

  if (!data) {
    return <IonLoading isOpen />
  }

  console.log(data)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Casa na Árvore</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">Início</IonTitle>
          </IonToolbar>
        </IonHeader>
        {
          data.map((categoria: any, index: any) => (
            <>
              <IonTitle key={index}>{categoria.categoria}</IonTitle>
              {
                categoria.livros.map( (livro: any, index: any) => (
                  <IonText key={index}>{livro.Titulo}</IonText>
                ))
              }
            </>
          ))
        }
      </IonContent>
    </IonPage>
  );
};
export default Home;
