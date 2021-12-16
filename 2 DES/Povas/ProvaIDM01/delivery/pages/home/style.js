import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ABFF4C',
    },
    title: {
        display: 'flex',
        backgroundColor: '#4C93FF',
        color: '#fff',
        fontSize: 28,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 15,
        width: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#4C93FF',
        borderRadius: 15,
        backgroundColor: '#eee',
        margin: 15,
        padding: 15,
        alignItems: 'center',

    },
    id: {
        fontSize: 18,
        marginRight: 10,
    },
    entregador: {
        fontSize: 18
    }
})