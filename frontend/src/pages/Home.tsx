import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLoading, IonText } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Home.css';

import api from "../services/api"

// interface iData {

// }

const Home: React.FC = () => {
  const [data, setData] = useState<any>([] as any)

  useEffect(() => {
    api.get("user-home").then( response => {
      setData(response.data)
    })
  }, [])

  if (!data) {
    return <IonLoading isOpen />
  }

  let html = "";
  for(let categoria in data) {

    const livros = data[categoria];
    html += "<h1>"+categoria+"</h1>"
    console.log(categoria);
    livros.forEach((e: any, index:number) => {
      html += <p key={index}>{e.Titulo}</p>
    });

}

  if (!html) {
      return <IonLoading isOpen />
  }

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
        {html}
      </IonContent>
    </IonPage>
  );
};
export default Home;
