import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchGames from './SearchGames';
import MustPlay from './MustPlay';

const Stack = createStackNavigator();

export default function DiscoverGames({ navigation }) {
  return (
  <NavigationContainer independent='true'>
    <Stack.Navigator initialRouteName='DiscoverScreen'>
      <Stack.Screen name='DiscoverGames' component={DiscoverScreen} 
      options={{ title: 'Discover Games', 
      headerStyle: {backgroundColor:'#b1f2ff'}, headerTintColor: '#00a4c4', headerTitleStyle: {fontWeight: 'bold', fontFamily: 'monospace'},
      }}/>
      <Stack.Screen name='SearchGames' component={SearchGames} 
      options={{ title: 'Search Games', 
      headerStyle: {backgroundColor:'#b1f2ff'}, headerTintColor: '#00a4c4', headerTitleStyle: {fontWeight: 'bold', fontFamily: 'monospace'},
      }}/>
      <Stack.Screen name='MustPlay' component={MustPlay} 
      options={{ title: 'Must Play Games', 
      headerStyle: {backgroundColor:'#b1f2ff'}, headerTintColor: '#00a4c4', headerTitleStyle: {fontWeight: 'bold', fontFamily: 'monospace'},
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

function DiscoverScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle = 'dark-content' hidden = {false} backgroundColor = '#b1f2ff' translucent = {true} />
      <ImageBackground source={require('../assets/lsApp_Controller_01.png')} style={styles.image}>
            <View style={styles.buttons}>
              <Button buttonStyle={styles.button} icon={{name: 'star', color: '#fff'}} titleStyle={{color: "white", fontSize: 18, }} title='Must Play Games' onPress={() => navigation.navigate('MustPlay')} />
              <Button buttonStyle={styles.button} icon={{name: 'search', color: '#fff'}} titleStyle={{color: "white", fontSize: 18, }} title='Search Games' onPress={() => navigation.navigate('SearchGames')} />
            </View>
      </ImageBackground>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
},
  image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center'
  },
  buttons: {
    alignItems: 'center',
  },
  button: {
    width: 200, 
    height: 50,
    marginTop: 150, 
    marginBottom: 200, 
    backgroundColor: '#00a4c4'
  },
});