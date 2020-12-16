import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Text, View, FlatList, StatusBar } from 'react-native';
import { Icon, Button, Input, ListItem } from 'react-native-elements';
import * as firebase from 'firebase';

// Initialize Firebase with configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwQElIQ_iqaeLsb5KqD6gJs0vUaUQQJLo",
    authDomain: "lsapp-3fd2b.firebaseapp.com",
    databaseURL: "https://lsapp-3fd2b-default-rtdb.firebaseio.com",
    projectId: "lsapp-3fd2b",
    storageBucket: "lsapp-3fd2b.appspot.com",
    messagingSenderId: "193884489346",
    appId: "1:193884489346:web:2a25c04bc1a71c8e56569b"
  };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if firebase already initialized
    } 

export default function QuestLog() {
    const [id, setId] = useState(0);
    const [game, setGame] = useState('');
    const [quest, setQuest] = useState('');
    const [timeLimit, setTimeLimit] = useState('');
    const [questList, setQuestList] = useState([]);
  
    useEffect(() => {
      firebase.database().ref('questList/').on('value', snapshot => {
        const data = snapshot.val();
        const quests = Object.values(data);
        setQuestList(quests);
      });
    }, []);
  
    const saveItem = () => {
      firebase.database().ref('questList/').push({'id': id, 'game': game, 'quest': quest, 'timeLimit': timeLimit});
      setId(id+1);
      setGame('');
      setQuest('');
      setTimeLimit('');
    }

    const deleteItem = item => {
      firebase.database().ref('questList/').once('value').then((snapshot) => {
        snapshot.forEach((item) => {
          return firebase.database().ref("questList").child(item.key).remove();
          });
        });
    };
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle = 'dark-content' hidden = {false} backgroundColor = '#b1f2ff' translucent = {true} />
        <ImageBackground source={require('../assets/lsApp_Keyboard.png')} style={styles.image}>
        <View style={styles.headercontainer}>
            <Text style={styles.h1}>LifeSteal</Text>
            <Text style={styles.h2}>Quest Log</Text>
        </View>
        <View style={styles.inputcontainer}>
        <Input placeholder='Game title' label='GAME'
          leftIcon={<Icon name='games' size={24} color='white'/>}
          style={styles.textinput}
          onChangeText={(game) => setGame(game)}
          value={game}/>  
        <Input placeholder='Quest description' label='QUEST'
          leftIcon={<Icon name='feedback' size={24} color='white'/>}
          style={styles.textinput}
          onChangeText={(quest) => setQuest(quest)}
          value={quest}/>  
        <Input placeholder='Time to complete' label='TIME LIMIT' 
          leftIcon={<Icon name='timer' size={24} color='white'/>}
          style={styles.textinput}
          onChangeText={(timeLimit) => setTimeLimit(timeLimit)}
          value={timeLimit}/>     
        <Button buttonStyle={styles.buttonsave} icon={{name: 'add', color: '#fff'}} onPress={saveItem} title="Add New Quest" />
        <Text style={styles.h3}>Quests</Text>
        <FlatList
          data={questList}
          keyExtractor={(item, index) => index.toString()} 
          renderItem={({item}) => (
            <ListItem containerStyle={{width: 400, backgroundColor: 'black'}} bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={{color: '#00d5ff'}}><Icon name='announcement' color='#b1f2ff'/> {item.quest} <ListItem.Subtitle style={{color: '#b1f2ff'}}>{item.timeLimit}</ListItem.Subtitle></ListItem.Title>
                <ListItem.Subtitle style={{color: '#00a4c4'}}>{item.game}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon type='material' name='check' color='#c40042' onPress={() => deleteItem(item)} />
          </ListItem>
          )}
        />
        </View>
        </ImageBackground>      
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headercontainer: {
        marginTop: 110,
        marginBottom: 10,
        backgroundColor: '#b1f2ff'
    },
    inputcontainer: {
        alignItems: 'center'
    },
    textinput: {
      color: 'white',
      fontSize: 15
    },
    buttonsave: {
      width: 200, 
      marginTop: 5, 
      backgroundColor: '#00a4c4'
    },
    listcontainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    h1: {
       color: '#00a4c4',
       fontSize: 25,
       fontFamily: 'monospace',
       fontWeight: 'bold',
       textAlign: 'center'
    },
    h2: {
       color: 'black',
       fontSize: 20,
       fontFamily: 'monospace',
       textAlign: 'center'
    },
    h3: {
        marginTop: 20,
        color: '#00d5ff',
        fontSize: 25,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});
  