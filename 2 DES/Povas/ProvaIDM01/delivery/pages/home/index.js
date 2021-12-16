import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import style from './style.js';

export default function Home({navigation, route}){
    const [lista, setLista] = useState([]);

    useEffect(() =>{
        let url = "http://10.87.207.2:3000/entregas/entregadores";

        fetch(url)
        .then((response) =>{
            return response.json();
        }).then(data =>{
            console.log(data)
            setLista(data);
        })
    },[])

    return(
        <View style={style.body}>
            <Text style={style.title}>Motoboys Disponiveis</Text>
           
            <ScrollView style={style.scroll}>
                {lista.map((item, index) => {
                    return (
                        <TouchableOpacity style={style.card} key={index} onPress={() =>{navigation.navigate("Pedidos", {id_entregador: item.id_entregador})} } >
                            <Text style={style.id}>{item.id_entregador}</Text>
                            <Text style={style.entregador}>{item.nome}</Text>
                            {console.log(item.id_entregador)}
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>

        </View>
    )
}