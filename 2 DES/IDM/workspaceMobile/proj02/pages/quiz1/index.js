import React, {useState} from 'react';
import {View, Button, Image, Text } from 'react-native';
import style from '../../../proj02/pages/quiz1/style';

export default function Pergunta({navigation}){
    var score = 0;
    const [resp, setResp] = useState("");
    const [opa, setOpa] = useState(1);
    const [btn, setBtn] = useState(false);

    return(
        <View>
            <Image source={require("../../assets/orochi.jpg")} style={style.img}/>
            <Image source={require("../../assets/orochi1.png")} style={{width: '100vw', height: '30vh', opacity: opa}}/>
            <View>
                <Text style={style.txt}>Quem é este personagem?</Text>
            </View>
            <View>
                <Button title="Rock Lee"  onPress={() => {setResp("Erro Burrão"); next()}} disabled={btn}/>
                <Button title="Guy"  onPress={() => {setResp("Erro Burrão"); next()}} disabled={btn}/>
                <Button title="Naruto"  onPress={() => {setResp("Erro Burrão"); next()}} disabled={btn}/>
                <Button title="Orochimaru" onPress={() => {setResp("Acertou"); acerto()}} disabled={btn}/>
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
        setTimeout(function(){navigation.navigate('Quiz2', score)}, 1500);
    }

    
}



