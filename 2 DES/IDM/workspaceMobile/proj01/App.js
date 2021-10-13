import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import Restaurante from './pages/restaurante';

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{title: 'Restaurantes'}}/>
                <Stack.Screen name="Restaurante" component={Restaurante}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}