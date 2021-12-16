import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ABFF4C',
    },
    card: {
        justifyContent: 'flex-start',
        backgroundColor: '#eee',
        padding: 15,
        borderRadius: 10
    },
    info: {
        fontSize: 16,
        marginBottom: 5
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4C93FF',
        margin: 25,
        padding: 15,
        borderRadius: 15,
    },
    btnText: {
        fontSize: 16,
        color: '#fff',
    }
})