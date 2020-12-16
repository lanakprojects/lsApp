import React from 'react';
import { View, ImageBackground, StyleSheet, Text, StatusBar } from 'react-native';

export default function HomeScreen() {
    return ( 
    <View style={styles.container}>
        <ImageBackground source={require('../assets/lsApp_Controller_02.png')} style={styles.image}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#b1f2ff" translucent = {true} />
            <Text style={styles.h1}>LifeSteal</Text>
            <Text style={styles.h2}>Gaming Manager</Text> 
        </ImageBackground>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        paddingBottom: 100
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    h1: {
        color: '#00d5ff',
        fontSize: 50,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    h2: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'monospace',
        textAlign: 'center'
    },
});