import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, ImageBackground, FlatList, Image, StatusBar } from 'react-native';

export default function MustPlay() {

  useEffect(() => {
    fetchGames()
  },[])

  const [bestGames, setBestGames] = useState([])

  const fetchGames = () => {
    fetch('https://rawg.io/api/collections/must-play/games')
    .then(response => response.json())
    .then((responseJson) => { 
      setBestGames(responseJson.results);
   })
   .catch((error) => { 
     Alert.alert('Error' , error.message); 
   }); 
 }

 const listSeparator = () => {
    return (
      <View style={styles.separator} />
    );
  };

return (
  <View style={styles.container}>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#b1f2ff" translucent = {true} />
    <ImageBackground source={require('../assets/lsApp_Keyboard.png')} style={styles.image}>
    <FlatList 
      style={{marginLeft : "5%"}}
      keyExtractor={item => item.id} 
      renderItem={({item}) => 
        <View style={styles.searchresult}>
          <Image style={styles.images} source={{ uri: item.background_image }} />
          <View style={styles.searchtext}>
                <Text style={styles.textname}>{item.name}</Text>
                <Text style={styles.text}>Rating: {item.rating}</Text>
                <Text style={styles.text}>Released: {item.released}</Text>
                <Text style={styles.text}>Platform: {item.platforms[0].platform.name}</Text>
          </View>
      </View>
    } 
      ItemSeparatorComponent={listSeparator}
      data={bestGames} 
    />
  </ImageBackground>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
searchresult: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
},
separator: { 
  height: 1, 
  width: '80%', 
  backgroundColor: '#CED0CE', 
  marginLeft: '10%'
},
images: {
  width: 90,
  height: 90,
  marginRight: 10
},
image: {
  flex: 1,
  resizeMode: 'cover',
  width: '100%', 
  height: '100%'
},
buttons: {
  alignItems: 'center',
},
button: {
  width: 200,
  marginBottom: 15, 
  backgroundColor: '#00a4c4'
},
textinput: {
  color: 'white',
  fontSize: 18
},
text: {
  color: 'white',
  fontSize: 16
},
textname: {
  color: '#00d5ff',
  fontWeight: 'bold',
  fontSize: 18
}
});