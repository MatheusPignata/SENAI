import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style.js';

export default function Arte({route, navigation}){
    const {nome, ano, autor, descricao, img} = route.params;

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
            <Image source={{uri: img}} style = {styles.img}/>
            <Text style={styles.nome}>{nome}</Text>
            <View style={styles.top}>
                <Text>{autor}</Text>
                <Text>{ano}</Text>
            </View>
            <Text style={styles.desc}>{descricao}</Text>
            
            <View>
                <Button title="Voltar" onPress={() => {navigation.goBack();}}/>
            </View>
        </View>
    )
}