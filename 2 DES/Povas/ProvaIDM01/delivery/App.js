import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/home/index.js';
import Pedidos from './pages/pedidos/index.js';
import Descricao from './pages/descricao/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pedidos" component={Pedidos} />
        <Stack.Screen name="Descricao" component={Descricao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
