import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from './style.js';

export default function Restaurante({route, navigation}) {
    const {nome, nota, endereco, telefone, horario, imagem} = route.params;

    return (
        <View>
            <Image source={imagem} style={{width: '100vw', height: '30vh'}}/>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.nota}>{nota}</Text>
            <Text style={styles.endereco}>{endereco}</Text>
            <Text style={styles.telefone}>{telefone}</Text>
            <Text style={styles.horario}>{horario}</Text>
            <Button title="Voltar para HOME" onPress={() => {navigation.goBack();}}/>
        </View>
    );
}