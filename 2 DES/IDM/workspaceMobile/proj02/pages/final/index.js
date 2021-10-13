import React, {useState, useEffect} from 'react';
import {View, Button, Image, Text } from 'react-native';
import style from '../../../proj02/pages/quiz1/style';

var foto1 = require("../../assets/narutof.png");

export default function Pergunta({route, navigation}){
    var score = route.params;
    const [msg, setMsg] = useState("");

    useEffect(()=>{
        if(score <= 2){
            foto1 = require("../../assets/narutot.jpg");
            setMsg("Você decepcionou o Naruto")
        }else{
            setMsg("Parabéns, Naruto está orgulhoso!!")
        }
    }, []);


    return(
        <View>
            <Image source={foto1} style={{width: '100vw', height: '30vh'}}/>
            <View>
                <Text style={style.txt}>{msg}</Text>
                <Text style={style.txt}>Você acertou {score} / 4</Text>
            </View>
            <View>
                <Button title="Jogar Novamente"  onPress={() => {navigation.navigate('Home')}}/>
            </View>
        </View>
    );

}
