import React from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    title:'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };
  render() {
    return <Text>List of My</Text>
  }
}

export default HomeScreen
