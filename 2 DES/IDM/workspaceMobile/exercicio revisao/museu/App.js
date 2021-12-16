import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import Artes from './pages/artes';
import Arte from './pages/arte';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} options={{title: 'Menu'}}/>
        <Stack.Screen name="Artes" component={Artes} options={{title: 'Artes'}}/>
        <Stack.Screen name="Arte" component={Arte} options={{title: 'Arte'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}