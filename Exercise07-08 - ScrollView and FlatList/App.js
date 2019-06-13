import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AlbumsScreen from './components/pages/AlbumsScreen';
import DetailsScreen from './components/pages/DetailsScreen';
import NewsScreen from './components/pages/NewsScreen';
import { Ionicons } from '@expo/vector-icons';


const AlbumsStack = createStackNavigator({
  Albums: { screen: AlbumsScreen },
  Details: {screen: DetailsScreen}
});

const NewsStack = createStackNavigator({
  News: { screen: NewsScreen },
});



export default createBottomTabNavigator(
  {
    Albums: { screen: AlbumsStack },
    News: { screen: NewsStack },
  },

  {
    navigationOptions: ({ navigation }) => ({

      tabBarIcon: ({focused, tintColor }) => {

        const { routeName } = navigation.state;
        var iconName;

        if (routeName === 'Albums') {
          iconName = 'md-list';
        } else if (routeName === 'News') {
          iconName = 'md-paper';
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


