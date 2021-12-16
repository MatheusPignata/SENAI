import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import style from './style.js';

export default function Criacao({navigation}) {
    const [equipe, setEquipe] = useState("");
    const [j1, setJ1] = useState("");
    const [j2, setJ2] = useState("");
    const [j3, setJ3] = useState("");
    const [j4, setJ4] = useState("");
    const [j5, setJ5] = useState("");
    const [coach, setCoach] = useState("");
    const [msg, setMsg] = useState("");

    const criar = () => {
        let url = "http://10.87.207.20:8080/api/equipe";

        if(equipe != "" && j1 != "" && j2 != "" && j3 != "" && j4 != "" && j5 != "" && coach != ""){
            let time = {
                "nomeEquipe": equipe,
                "jogadores": [
                    {
                        "posicao": "top",
                        "jogador": j1
                    },
                    {
                        "posicao": "mid",
                        "jogador": j2
                    },
                    {
                        "posicao": "jg",
                        "jogador": j3
                    },
                    {
                        "posicao": "adc",
                        "jogador": j4
                    },
                    {
                        "posicao": "sup",
                        "jogador": j5
                    }
                ],
                "nomeCoach": coach
            }
    
            fetch(url, {
                method: "POST",
                body: JSON.stringify(time)
            }).then(resp => {
                return resp.status;
            }).then(data =>{
                console.log(data)
                navigation.navigate("Home");
            }).then(err =>{
                console.log(err)
            })
        }else{
            setMsg("Preencha todos os campos")
        }

        
    }


    return(
        <View style={style.body}>
            <Text style={style.title}>Criação de Equipe</Text>
            <TextInput style={style.input} placeholder="Nome da Equipe" onChangeText={(value) => {setEquipe(value)}} />
            <View>
                <Text>Jogadores:</Text>
                <View>
                    <View style={style.inputs}>
                        <Text style={style.text}>Jogador Top</Text>
                        <TextInput style={style.input} placeholder="Nome do Jogador" onChangeText={(value) => {setJ1(value)}} />
                    </View>
                    <View style={style.inputs}>
                        <Text style={style.text}>Jogador Mid</Text>
                        <TextInput style={style.input} placeholder="Nome do Jogador" onChangeText={(value) => {setJ2(value)}} />
                    </View>
                    <View style={style.inputs}>
                        <Text style={style.text}>Jogador Jungler</Text>
                        <TextInput style={style.input} placeholder="Nome do Jogador" onChangeText={(value) => {setJ3(value)}} />
                    </View>
                    <View style={style.inputs}>
                        <Text style={style.text}>Jogador ADC</Text>
                        <TextInput style={style.input} placeholder="Nome do Jogador" onChangeText={(value) => {setJ4(value)}} />
                    </View>
                    <View style={style.inputs}>
                        <Text style={style.text}>Jogador Suporte</Text>
                        <TextInput style={style.input} placeholder="Nome do Jogador" onChangeText={(value) => {setJ5(value)}} />
                    </View>
                </View>
            </View>
            <TextInput style={style.input} placeholder="Nome do Coach" onChangeText={(value) => {setCoach(value)}} />
            <Text style={style.msg}>{msg}</Text>
            <TouchableOpacity style={style.btn} onPress={criar}>
                <Text style={style.btnText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}