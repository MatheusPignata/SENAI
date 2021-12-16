import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import style from './style.js';

export default function Home({navigation, route}){
    const [lista, setLista] = useState([]);
    //const {id , nome } = route.params;

    useEffect(() =>{
        let url = "http://10.87.207.20:8080/api/equipe";

        fetch(url)
        .then((response) =>{
            return response.json();
        }).then(data =>{
            setLista(data);
        })
    })

    return(
        <View style={style.body}>
            <View style={{flex: 1}}>
                <Text style={style.title}>Criar uma equipe nova:</Text>
                <TouchableOpacity style={style.btn} onPress={() => {navigation.navigate("Criacao")}}>
                    <Text style={style.btnText}>CRIAR</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:8, width: '90%'}}>
                <Text style={style.title}>Ver equipes existentes: </Text>
                <ScrollView style={style.scroll}>
                    {
                        lista.map((item, index) =>{
                            return (
                                <TouchableOpacity style={style.card} key={index} onPress={() =>{navigation.navigate("Equipe", {id: item.id})}}>
                                    <Text style={style.equipe}>Equipe: {item.nomeEquipe}</Text>
                                    <Text style={style.coach}>Coach: {item.nomeCoach}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}