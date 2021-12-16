import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252525',
        height: '100%',
    },
    header: {
        fontSize: 40,
        color: '#fff'
    },
    inputs:{
        marginTop: 50,
        marginBottom: 50,
    },
    input:{
        borderWidth: 1,
        borderColor: '#fff',
        margin: 15,
        padding: 5, 
        color: '#fff',
        outlineStyle: 'none',
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