import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import TabNav from './app/navigation/tab-nav';
import { PaperProvider } from 'react-native-paper';
import ToastManager from 'toastify-react-native';

const App = () => {

  return (
    <NavigationContainer>
       <PaperProvider>
      <TabNav />
      </PaperProvider>
      <ToastManager textStyle={{fontSize: 15}} />
    </NavigationContainer>
  );
};

export default App;
