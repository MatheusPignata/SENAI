import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import Quiz1 from './pages/quiz1';
import Quiz2 from './pages/quiz2';
import Quiz3 from './pages/quiz3';
import Quiz4 from './pages/quiz4';
import Final from './pages/final';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} options={{title: 'Menu'}}/>
                <Stack.Screen name="Quiz1" component={Quiz1}/>
                <Stack.Screen name="Quiz2" component={Quiz2}/>
                <Stack.Screen name="Quiz3" component={Quiz3}/>
                <Stack.Screen name="Quiz4" component={Quiz4}/>
                <Stack.Screen name="Final" component={Final}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}