import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        body: {
            display: 'flex',
            flexDirection: 'collum',
            justifyContent: 'center', 

        },
        background:{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100vh',
            zIndex: 0
        },
        img:{
            height: '50vh',
        },
        nome: {
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            zIndex: 1
        },
        top:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10
        },
        desc: {
            margin: 10,
            zIndex: 1
        }
    }
);