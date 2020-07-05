import React, { useState, useRef } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonSlides, IonSlide, IonIcon, useIonViewWillEnter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import './Tutorial.css';
import { RouteComponentProps } from 'react-router';


const Tutorial: React.FC = () => {
  const [showSkip, setShowSkip] = useState(true);
  const slideRef = useRef<HTMLIonSlidesElement>(null);


  return (
    <IonPage color="primary" id="tutorial-page">
      <IonContent fullscreen>
      <br />
      <br />
        <IonSlides ref={slideRef} pager={false}>
          <IonSlide>
            <img src="assets/tutorial/01.png" alt="" className="slide-image" />
            <h2 className="slide-title">
                Interatividade
            </h2>
            <p>
            Uau, imagina só? Os livros interagem com você através de sons e movimento, além da opção de contar histórias no formato audiobook.
            </p>
          </IonSlide>
          <IonSlide>
            <img src="assets/tutorial/02.png" alt="" className="slide-image" />
            <h2 className="slide-title">Loja</h2>
            <p>
            Muitos prêmios! Use suas nozes para comprar brindes na lojinha da Casa na Árvore. São muitos itens!
            </p>
          </IonSlide>
          <IonSlide>
            <img src="assets/tutorial/03.png" alt="" className="slide-image" />
            <h2 className="slide-title">Chatbot</h2>
            <p>
            Um mascote para te ajudar durante sua jornada. Fale com o Esquilo da Árvore para tirar sua dúvidas sobre como funciona a plataforma.
            </p>
          </IonSlide>
          <IonSlide>
            <img src="assets/tutorial/04.png" alt="" className="slide-image" />
            <h2 className="slide-title">Conectividade</h2>
            <p>
            Baixe livros atráves do celular, caso não tenha peça a um amigo. Não precisa acessar a internet, pode ter os livros baixados para acessar off-line.
            </p>
          </IonSlide>
          <IonSlide>
            <img src="assets/tutorial/04.png" alt="" className="slide-image" />
            <h2 className="slide-title">Vamos começar?</h2>
            <IonButton routerLink="/abas"/*onClick={startApp}*/>
              Continuar
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tutorial