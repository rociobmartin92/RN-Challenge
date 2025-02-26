import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { Gallery, Home } from '../screens';


const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="gallery" component={Gallery} />
    </Stack.Navigator>
  );
}

export default RootStack;
