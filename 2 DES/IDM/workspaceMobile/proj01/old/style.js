import { StyleSheet } from 'react-native';

var padding = "10px"

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#C542F5',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title:{
            color: '#F5D142',
            fontSize: '1.5rem',
            fontWeight: 'bold'
        },
        card:{
            backgroundColor: '#ccc',
            width: '90%',   
            height: '8%',
            marginTop: '2%',
            borderRadius: '10px',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: padding,
            paddingRight: padding
        },
        nomeLoja:{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.15rem'
        },
        notaLoja:{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.1rem'
        },
        star:{
            width: '25px',
            height: '25px',
            marginLeft: '10px'
        },
        nota:{
            flexDirection: 'row',
        }
        
    }
);