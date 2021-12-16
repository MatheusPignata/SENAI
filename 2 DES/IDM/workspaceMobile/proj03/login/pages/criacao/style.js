import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252525',
    },
    header: {
        fontSize: 40,
        color: '#fff'
    },
    inputs:{
        marginTop: 10,
    },
    input:{
        borderWidth: 1,
        borderColor: '#fff',
        margin: 15,
        padding: 5, 
        color: '#fff',
        outlineStyle: 'none',
    },
    title:{
        color: '#fff',
        fontSize: 24
    },
    text:{
        color: '#fff',
        fontSize: 14,
        alignSelf: 'center',
    },
    msg:{
        color: '#fff',
        padding: 10,
    },
    btn:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 5,
        width: '25vw'
    },
    btnText:{
        color: '#fff',
    }
})