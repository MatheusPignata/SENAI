import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import style from './style.js';

export default function Home({navigation, route}){
    const {id_entrega, cliente, endereco, produto, valor} = route.params;
    
    const entrega = () =>{
        let url = "http://10.87.207.2:3000/entregas/entregues/"+id_entrega;

        fetch(url,{
            method: "PUT",
        }).then(resp => {
            if(resp.status == 200){
                navigation.navigate("Home");
            }
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }
   

    return(
        <View style={style.body}>
            <View style={style.card}>
                <Text style={style.info}>Pedido: {id_entrega}</Text>
                <Text style={style.info}>Cliente: {cliente}</Text>
                <Text style={style.info}>Endereço: {endereco}</Text>
                <Text style={style.info}>Produto: {produto}</Text>
                <Text style={style.info}>Valor: R$ {valor}</Text>
            </View>
            <TouchableOpacity style={style.btn} onPress={entrega} >
                <Text style={style.btnText}>Finalizar pedido</Text>
            </TouchableOpacity>
        </View>
    )
}