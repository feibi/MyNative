import React from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import Detail from './components/Screen/Detail'
import MyTabNavigator from './components/Navigator/MyTabNavigator';

const MyNative = StackNavigator({
  Home: {
    screen: MyTabNavigator
  },
  Detail: {
    path: 'detail',
    screen: Detail
  }
}, {
  headerMode: 'screen',
  transitionConfig: () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal}),
  navigationOptions: {
    headerTitleStyle: {
      fontSize: 14,
      color: '#fff'
    },
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#3b92e9'
    }
  }
});

AppRegistry.registerComponent('MyNative', () => MyNative);
