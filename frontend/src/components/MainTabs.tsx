
import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import './MainTabs.css'

import { 
    home, 
    person, 
    gameController, 
    notifications, 
} from 'ionicons/icons';

/*Principais Abas */
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Games from '../pages/Games';
import Notifications from '../pages/Notifications';
import Tutorial from '../pages/Tutorial';
import Friend from '../pages/Friend';

const MainTabs: React.FC = () => {

return (    
    <IonTabs>
    <IonRouterOutlet>
        
        <Redirect exact path="/abas" to="/abas/inicio" />

        <Route path="/abas/inicio" render={() => <Home />} exact />
        <Route path="/abas/perfil" render={() => <Profile />} exact />
        <Route path="/abas/games" render={() => <Games />} exact />
        <Route path="/abas/notificacoes" render={() => <Tutorial />} exact />
        {/*
        Using the render method prop cuts down the number of renders your components will have due to route changes.
        Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */
        /*<Route path="/tabs/schedule" render={() => <SchedulePage />} exact={true} />
        <Route path="/tabs/speakers" render={() => <SpeakerList />} exact={true} />
        <Route path="/tabs/speakers/:id" component={SpeakerDetail} exact={true} />
        <Route path="/tabs/schedule/:id" component={SessionDetail} />
        <Route path="/tabs/speakers/sessions/:id" component={SessionDetail} />
        <Route path="/tabs/map" render={() => <MapView />} exact={true} />
        <Route path="/tabs/about" render={() => <About />} exact={true} />*/}

    </IonRouterOutlet>
    
    <IonTabBar slot="bottom" color="primary">
        <IonTabButton tab="home" href="/abas/inicio">
        <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton tab="profile" href="/abas/perfil">
        <IonIcon icon={person} />
        </IonTabButton>
        <IonTabButton tab="games" href="/abas/games">
        <IonIcon icon={gameController} />
        </IonTabButton>
        <IonTabButton tab="notifications" href="/abas/notificacoes">
        <IonIcon icon={notifications} />
        </IonTabButton>
    </IonTabBar>
    </IonTabs>
);
};

export default MainTabs;