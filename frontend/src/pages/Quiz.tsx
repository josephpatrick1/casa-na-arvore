import { IonBackButton, IonButtons, IonContent, IonHeader, IonCard, IonList,IonListHeader, IonItem, IonRadio, IonRadioGroup, IonLabel, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import swal from "sweetalert2"
import './Quiz.css';

const Quiz: React.FC = () => {
    const history = useHistory()

    // const [selected, setSelected] = useState<string>('errado');

    async function isCorrect(selected: string) {
        if (selected === "3") {
            await swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Parabéns',
                showConfirmButton: false,
                timer: 1000
            })
            history.push("/abas/games")
        } else {
            await swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Não foi dessa vez!',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary" >
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/abas/perfil" />
                    </IonButtons>
                    <IonTitle>Quiz</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar color="primary" > 
                        <IonTitle size="large">Quiz</IonTitle>
                    </IonToolbar>
                </IonHeader>
                    
                <IonCard>

                <IonCardHeader>
                    <IonCardSubtitle>O Pequeno Príncipe</IonCardSubtitle>
                    <IonCardTitle>Qual o nome do escritor de "O Pequeno Príncipe"?</IonCardTitle>
                    </IonCardHeader>

                </IonCard>
                
                
                <IonList>
          <IonRadioGroup onIonChange={ e => {
                isCorrect(e.detail.value)
            }
        }>
            <IonListHeader>
              <IonLabel>Name</IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>Cristovão Tezza</IonLabel>
              <IonRadio slot="start" value="1" />
            </IonItem>

            <IonItem>
              <IonLabel>Stephen King</IonLabel>
              <IonRadio slot="start" value="2" />
            </IonItem>

            <IonItem>
              <IonLabel>Antoine de Saint-Exupéry</IonLabel>
              <IonRadio slot="start" value="3" />
            </IonItem>
          </IonRadioGroup>         
        </IonList>


                
            </IonContent>
        </IonPage>
    );
};

export default Quiz;
