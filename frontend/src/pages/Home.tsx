import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLoading,
  IonRow
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router';

import './Home.css';

import api from "../services/api"

const Home:React.FC = () => {
  const [data, setData] = useState<any>([] as any)

  useEffect(() => {
    api.get("user-home").then(response => {
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
        <br />
        {
          data.map((categoria: any, index: any) => (
            <div key={index}>
              <IonTitle>{categoria.categoria}</IonTitle>
              <IonRow class="infinity">
              {
                categoria.livros.map((livro: any, index: any) => (
                  <img key={index} alt={livro.Titulo} src={`http://localhost:3333/uploads/${livro.Capa}`} height="200" />
                )) 
              }
              </IonRow>
            </div>
          ))
        }
      </IonContent>
    </IonPage>
  );
}
export default Home;
