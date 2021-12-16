import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style.js';

export default function Home({navigation}){
    
    return(
        <View style={styles.body}>
            <LinearGradient 
                colors={['#fff','#cefffd', '#00fff4']} 
                start={{
                    x: -0.5,
                    y: 0
                }}
                end={{
                    x: .5,
                    y: 1
                }}
                style={styles.background}/>
                
            <Text style={styles.text}>Bem Vindo ao Museu Digital</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Artes')}}>
                <Text style={styles.btnText}>Começar</Text>
            </TouchableOpacity>
        </View>
    );
}