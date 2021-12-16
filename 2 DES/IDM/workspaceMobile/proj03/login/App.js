import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/login/index.js';
import Home from './pages/home/index.js';
import Equipe from './pages/equipe/index.js';
import Criacao from './pages/criacao/index.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Criacao" component={Criacao} />
        <Stack.Screen name="Tela de Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Equipe" component={Equipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
