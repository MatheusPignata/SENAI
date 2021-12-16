import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import style from './style.js';

export default function Home({navigation, route}){
    const [pedido, setPedido] = useState([]);

    const {id_entregador} = route.params;

    useEffect(() => {
        let url = "http://10.87.207.2:3000/entregas/entregadores/"+id_entregador;

        fetch(url)
        .then(resp => {
            return resp.json();
        }).then(data => {
            setPedido(data);
        })
    },[]);

    return(
        <View style={style.body}>
            <Text style={style.title}>Pedidos não entregues</Text>
            {
                pedido.map((item, index) => {
                    return (
                        <TouchableOpacity style={style.card} key={index} onPress={() =>{navigation.navigate("Descricao", item)} }>
                            <Text style={style.info}>{item.cliente}</Text>
                            <Text style={style.info}>{item.produto}</Text>
                            <Text style={style.info}>{item.endereco}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            <TouchableOpacity style={style.btn} onPress={() =>{navigation.navigate("Home")}}>
                <Text style={style.btnText}>Voltar</Text>
            </TouchableOpacity>

        </View>
    )
}