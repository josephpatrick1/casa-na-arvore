
import React, {useContext} from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import MainTabs from './components/MainTabs'; 
import Login from './pages/Login';
import { AuthProvider } from './Context/AuthContext';


import {Context} from "./Context/AuthContext"

import Menu from './components/Menu';

const App: React.FC = () => {

  function CustomRoute({ isPrivate, ...rest }: any) {
    const { loading, authenticated } = useContext(Context);
  
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    if (isPrivate && !authenticated) {
      return <Redirect to="/login" />
    }
  
    return <Route {...rest} />;
  }

  return (
    <IonApp>
      <IonReactRouter>
          <Menu />
          <IonRouterOutlet id="main">
            <AuthProvider>
              <CustomRoute path="/login" component={Login} />
              <CustomRoute isPrivate path="/abas" render={() => <MainTabs />}  />
              {/* <Redirect from="/" to="/abas" exact /> */}
            </AuthProvider>
          </IonRouterOutlet>
        
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
