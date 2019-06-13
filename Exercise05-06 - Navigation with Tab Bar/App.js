import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './components/pages/HomeScreen';
import SettingsScreen from './components/pages/SettingsScreen';
import DetailsScreen from './components/pages/DetailsScreen'; 
import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },

  {
    navigationOptions: ({ navigation }) => ({

      tabBarIcon: ({ focused, tintColor }) => {

        const { routeName } = navigation.state;
        var iconName;

        if (routeName === 'Home') {
          iconName = 'md-information-circle';
        } else if (routeName === 'Settings') {
          iconName = 'md-options';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);


