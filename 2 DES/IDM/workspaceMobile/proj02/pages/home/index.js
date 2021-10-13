import React from 'react';
import {View, Button, Image} from 'react-native';

export default function Home({navigation}){

    return(
        <View style={{height: '100%', display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require("../../assets/logo.png")} style={{width: '100vw', height: '20vh'}}/>
            <Button title="Começar" onPress={() => {navigation.navigate('Quiz1')}}></Button>
        </View>
    );
}