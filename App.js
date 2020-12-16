import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import QuestLog from './screens/QuestLog';
import DiscoverGames from './screens/DiscoverGames';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#b1f2ff" translucent = {true} />
        <Tab.Navigator 
        initialRouteName='Home'
        tabBarOptions={{ 
          activeTintColor: '#00a4c4', inactiveTintColor: 'black', 
          style:{ backgroundColor: '#b1f2ff' } }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {iconName='md-home';} 
            else if (route.name === 'Quest Log') {iconName='md-checkbox';}
            else if (route.name === 'Discover Games') {iconName='md-heart';}
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarOptions: {
          activeTintColor: 'black',
        },
        tablabelStyle:{
          fontFamily: 'monospace',
          fontSize: 25
        },
        })}>
          <Tab.Screen name="Quest Log" component={QuestLog} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Discover Games" component={DiscoverGames} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}