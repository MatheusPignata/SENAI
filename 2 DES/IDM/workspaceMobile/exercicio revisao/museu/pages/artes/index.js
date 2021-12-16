import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style.js';

export default function Artes ({navigation}) {
    const data = [
        {
            'nome': 'Mona Lisa',
            'ano': 1503,
            'autor': 'Leonardo da Vinci',
            'descricao': 'Mona Lisa (ou La Gioconda) é uma famosíssima obra de arte feita pelo italiano Leonardo da Vinci. O quadro, no qual foi utilizada a técnica do sfumato, retrata a figura de uma mulher com um sorriso tímido e uma expressão introspectiva. ... Uma das grandes discussões no meio artístico é sobre a mulher representada no quadro.',
            'img': 'https://s1.static.brasilescola.uol.com.br/be/imagens/artes/monalisa1000.jpg'
        },
        {
            'nome': 'O Grito',
            'ano': 1893,
            'autor': 'Edvard Munch',
            'descricao': 'O Grito é uma série de quatro pinturas do norueguês Edvard Munch, 1893. A obra representa uma figura andrógina num momento de profunda angústia e desespero. O plano de fundo é a doca do fiorde de Oslo ao pôr do sol.',
            'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg/1200px-Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg'
        },
        {
            'nome': 'A Noite Estrelada',
            'ano': 1889,
            'autor': 'Vincent van Gogh',
            'descricao': 'A Noite Estrelada é uma pintura de Vincent van Gogh de 1889. A obra retrata a vista da janela de um quarto do hospício de Saint-Rémy-de-Provence, pouco antes do nascer do sol, com a adição de um vilarejo idealizado pelo artista. A tela faz parte da coleção permanente do Museu de Arte Moderna de Nova Iorque desde 1941.',
            'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'
        },
        {
            'nome': 'A Pietà',
            'ano': 1498,
            'autor': 'Michelangelo',
            'descricao': 'A Pietà de Michelangelo é talvez a pietà mais conhecida e uma das mais famosas esculturas feitas pelo artista. Representa Jesus morto nos braços de sua mãe. A fita que atravessa o peito da Virgem Maria traz a assinatura do autor, única que se conhece: MICHAEL ANGELUS. BONAROTUS. FLORENT.',
            'img': 'https://www.infoescola.com/wp-content/uploads/2020/01/pieta-782214787.jpg'
        },
        {
            'nome': 'Fallen Angel',
            'ano': 1847,
            'autor': 'Alexandre Cabanel',
            'descricao': 'O quadro de lúcifer depois de ser expulso do céu pelas rebeldias contra Deus. Criado pelo artista Alexandre Cabanel,demonstrando que ele é o mais lindo dos anjos. Lúcifer escondeu o rosto e sussurrou lágrimas ele não quer mostrar aos outros anjos seu ódio raiva e ressentimento.',
            'img': 'https://a-static.mlcdn.com.br/618x463/anjo-caido-alexandre-cabanel-60x94-tela-canvas-para-quadro-santhatela/santhatela2/13705028330/95cb5fe4d14c66bb8e82a28b439ad9ce.jpg'
        },
    ]

    return(
        <View> 
            <LinearGradient 
                colors={['#fff','#cefffd', '#00fff4']} 
                start={{
                    x: -0.5,
                    y: 0
                }}
                end={{
                    x: .5,
                    y: 1
                }}
                style={styles.background}/>
            {
                data.map((rest, index) => {
                    return (
                        <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate('Arte', rest)}} key={index}>
                            {console.log(rest.img)}
                            <Image source={{uri: rest.img}} style = {styles.img}/>
                            <Text>{rest.nome}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            <View>
                <Button title="Voltar para o menu" onPress={() => {navigation.goBack();}}/>
            </View>
        </View>
    );
}