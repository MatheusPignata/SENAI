import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style.js';

export default function App() {
    const [value,setValue] = useState("");
    const star = require('./assets/star.png');
    const nome = "Fulano da Silva";

    const data = [
        {
            nome:"Reenye Lanche",
            nota:6
        },
        {
            nome:"Mingui Aliche",
            nota:5
        },
        {
            nome:"Tia Beth",
            nota:4
        },
        {
            nome:"Marchesini",
            nota:2
        }
    ];

    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>{value}</Text>
            {
                data.map((restaurante, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.card} onPress={() => {setValue(restaurante.nome)}}>
                            <Text style={styles.nomeLoja}>{restaurante.nome}</Text>
                            <View style={styles.nota}>
                                <Text style={styles.notaLoja}>{restaurante.nota}</Text>
                                <Image source={star} style={styles.star}></Image>
                            </View>
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    );
}