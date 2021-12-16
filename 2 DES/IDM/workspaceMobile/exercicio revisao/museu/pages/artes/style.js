import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        background:{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100vh',
            zIndex: 0
        },
        card: {
            display: 'flex',
            flexDirection: 'row',
            margin: 10,
            alignItems: 'center', 
            borderWidth: 1,
            borderColor: '#000',
            backgroundColor: '#fff'
        },
        img:{
            width: 50,
            height: 50,
            marginRight: 10,
        }
    }
);