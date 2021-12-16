import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native'
import style from './style.js';

export default function Equipe({route}){
    const [equipe, setEquipe] = useState({
        "nomeEquipe": "",
        "jogadores": [
            {
                "posicao": "top",
                "jogador": ""
            },
            {
                "posicao": "mid",
                "jogador": ""
            },
            {
                "posicao": "jg",
                "jogador": ""
            },
            {
                "posicao": "adc",
                "jogador": ""
            },
            {
                "posicao": "sup",
                "jogador": ""
            }
        ],
        "nomeCoach": ""

    });

    const {id} = route.params;

    useEffect(() => {
        let url = "http://10.87.207.20:8080/api/equipe/"+id;

        fetch(url)
        .then(resp => {
            return resp.json();
        }).then(data => {
            setEquipe(data);
            console.log(data);
        })
    },[]);

    return (
        <View>
            <Text>{equipe.nomeEquipe}</Text>
            {
                equipe.jogadores.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text>{item.posicao}</Text>
                            <Text>{item.nome}</Text>
                        </View>
                    )
                })
            }
            {console.log(equipe.jogadores)}
            <Text>{equipe.nomeCoach}</Text>
        </View>
    )
}