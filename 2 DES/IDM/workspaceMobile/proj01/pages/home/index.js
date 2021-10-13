import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
    const data = [
        {
            nome:"Restaurante 1",
            nota:4.5,
            endereco:"Rua das Avenidas, 123",
            telefone:"1234-4321",
            horario:"08:00 ~ 17:00",
            imagem:'https://static.wixstatic.com/media/207e10_32b7d9b6a7aa4533a7d99b9e4bc80522~mv2.png/v1/fit/w_447%2Ch_245%2Cal_c/file.png'
        },
        {
            nome:"Restaurante 2",
            nota:5,
            endereco:"Avenida das Ruas, 321",
            telefone:"4567-7654",
            horario:"18:00 ~ 23:00",
            imagem:'https://i2.wp.com/lugarzinho.com/wp-content/uploads/2019/01/Bar-da-Praia-02.jpg?resize=673%2C505&ssl=1'
        },
        {
            nome:"Restaurante 3",
            nota:3.8,
            endereco:"Alameda dos Anjos, 5",
            telefone:"2135-7894",
            horario:"10:30 ~ 14:00",
            imagem:'https://media-cdn.tripadvisor.com/media/photo-s/1a/e4/9a/3a/porfirio-s-guadalajara.jpg'
        }
    ]

    return (
        <View>
            {
                data.map((rest, index) => {
                    return (
                        <TouchableOpacity onPress={() => {navigation.navigate('Restaurante', rest)}} key={index}>
                            <Text>{rest.nome}</Text>
                            <Text>{rest.nota}</Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    );
}