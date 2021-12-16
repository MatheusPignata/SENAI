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
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: '#4C93FF',
        borderRadius: 15,
        backgroundColor: '#eee',
        margin: 15,
        padding: 15,
        alignItems: 'center',

    },
    info: {
        fontSize: 16,
        margin: 5
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4C93FF',
        margin: 10,
        padding: 15,
        borderRadius: 15,
    },
    btnText: {
        fontSize: 16,
        color: '#fff',
    }
})