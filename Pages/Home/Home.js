import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

function Home({ navigation }) {
    return (
        <>
            <View style={style.header}>
                <Image source={require('../../assets/icons/logo.png')} style={style.img} />
            </View>
            <View style={style.screen}>
                <Text style={style.welcome}>Seja bem-vindo!!</Text>
                <View style={style.button}>
                    <Button
                        onPress={() => { navigation.navigate('Matérias') }}
                        title='Ver Lista de Matérias'
                        color='#ffff'
                    />
                </View>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    header: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    screen: {
        flex: 1,
        paddingTop: -10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple'
    },
    welcome: {
        color: '#ffff',
        fontSize: 30
    },
    img: {
        width: 102,
        height: 53,
        alignSelf: "flex-start",

    },
    button: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        marginTop: 10
    }
});

export default Home;