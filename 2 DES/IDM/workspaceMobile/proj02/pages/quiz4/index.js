import React, {useState} from 'react';
import {View, Button, Image, Text } from 'react-native';
import style from '../../../proj02/pages/quiz1/style';

export default function Pergunta({route, navigation}){
    var score = route.params;
    const [resp, setResp] = useState("");
    const [opa, setOpa] = useState(1);
    const [btn, setBtn] = useState(false);

    return(
        <View>
            <Image source={require("../../assets/jiraya.jpg")} style={style.img}/>
            <Image source={require("../../assets/jiraya1.png")} style={{width: '100vw', height: '30vh', opacity: opa}}/>
            <View>
                <Text style={style.txt}>Quem é este personagem?</Text>
            </View>
            <View>
                <Button title="Jiraya"  onPress={() => {setResp("Erro Burrão"); next()}} disabled={btn}/>
                <Button title="Tsunade" onPress={() => {setResp("Acertou"); acerto()}} disabled={btn}/>
                <Button title="Kakashi"  onPress={() => {setResp("Erro Burrão"); next()}} disabled={btn}/>
                <Button title="Tobirama"  onPress={() => {setResp("Erro Burrão"); next()}} disabled={btn}/>
                <Text style={style.txt}>{resp}</Text>
            </View>
        </View>
    );

    function acerto(){
        score ++;
        next();
    }

    function next(){
        setOpa(0);
        setBtn(true);
        nextQuestion();
    }

    function nextQuestion(){
        setTimeout(function(){navigation.navigate('Final', score)}, 1500);
    }

    
}
