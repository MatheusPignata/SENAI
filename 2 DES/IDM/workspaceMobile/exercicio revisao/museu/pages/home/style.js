import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        body: {
            height: '100%',
            display:'flex', 
            flexDirection:'column', 
            alignItems: 'center', 
            justifyContent: 'center'
        },
        background:{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100vh',
            zIndex: 0
        },
        text:{
            zIndex: 1
        },
        btn: {
            padding: 10,
            margin: 10,
            alignItems: 'center',
            borderRadius: 20,
            backgroundColor: '#fff'
        },
        btnText:{

        }
    }
);