import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
<<<<<<< HEAD
// // import PDFViewer from "pdf-viewer-reactjs"

// const Leitor: React.FC = () => {

//   return (
//     // <IonPage>
//     //   <IonHeader>
//     //     <IonToolbar>
//     //       <IonButtons slot="start">
//     //         <IonMenuButton />
//     //       </IonButtons>
//     //       <IonTitle>Leitor</IonTitle>
//     //     </IonToolbar>
//     //   </IonHeader>
//     //   <IonContent>
//     //     <IonHeader collapse="condense">
//     //       <IonToolbar>
//     //         <IonTitle size="large">Leitor</IonTitle>
//     //       </IonToolbar>
//     //     </IonHeader>
//     //     <PDFViewer
//     //         document={{
//     //             url: '/assets/pdfs/livro.pdf',
//     //         }}
//     //     />
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Leitor;
=======
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Leitor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Leitor</IonTitle>
          </IonToolbar>
        </IonHeader>

        <iframe width="100%" height="100%" src="/assets/pdfs/livro1.pdf"></iframe>

      </IonContent>
      
    </IonPage>
  );
};

export default Page;
>>>>>>> ae29f134462e03d3186368619b857339e8c64f04
