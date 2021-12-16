import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import style from './style.js';


export default function Login({navigation}){
    const [user, setUser] = useState("");
    const [pw, setPw] = useState("");
    const [msg, setMsg] = useState("");

    const login = () => {
        let url = "http://10.87.207.20:8080/api/login";

        let data = {
            "user": user,
            "senha": pw
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(resp => {
            if(resp.status == 200){
                return resp.json();
            }else{
                setMsg("Usuario ou senha invalidos")
            }
        }).then(data => {
            if(data != undefined){
                navigation.navigate("Home", data);
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <View style={style.body}>
            <View>
                <Text style={style.header}>Login</Text>
            </View>
            <View style={style.inputs}>
                <TextInput style={style.input} placeholder="login" onChangeText={(value) => {setUser(value)}}/>
                <TextInput style={style.input} secureTextEntry={true} placeholder="senha" onChangeText={(value) => {setPw(value)}}/>
            </View>
            <Text style={style.msg}>{msg}</Text>
            <TouchableOpacity style={style.btn} onPress={login}>
                <Text style={style.btnText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}