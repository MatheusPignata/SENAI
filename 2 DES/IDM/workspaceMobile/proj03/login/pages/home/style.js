import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#252525',
    }, 
    title: {
        color: '#fff',
        fontSize: 24,
        alignSelf: 'center',
    },
    btn:{
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 5,
        marginTop: 10,
        width: '25vw'
    },
    btnText:{
        color: '#fff',
    },
    scroll:{
       flex:1,
    },
    card:{
        borderWidth: 1,
        borderColor: '#fff',
        margin: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 5,
    },
    equipe:{
        color: '#fff',
        fontSize: 18
    },
    coach:{
        color: '#fff',
        fontSize: 14
    }
})