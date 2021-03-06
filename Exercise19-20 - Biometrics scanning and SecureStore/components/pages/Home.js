import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import DetailsScreen from './DetailsScreen'; 
import AddNewScreen from './AddNewScreen';
import { Ionicons } from '@expo/vector-icons';
import BiometricAuthRegistrationScreen from './BiometricAuthRegistrationScreen';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
  BiometricAuthRegistration: { screen: BiometricAuthRegistrationScreen}
});

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    AddNew: {screen: AddNewScreen},
    Settings: { screen: SettingsStack },
  },

  {
    navigationOptions: ({ navigation }) => ({

      tabBarIcon: ({ focused, tintColor }) => {

        const { routeName } = navigation.state;
        var iconName;

        if (routeName === 'Home') {
          iconName = 'md-information-circle';
        }else if (routeName === 'AddNew') {
          iconName = 'ios-add-circle';
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


