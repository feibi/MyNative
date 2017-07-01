import React from 'react';
import {AppRegistry, Text, View, StatusBar, Button} from 'react-native';

function getValue < T > (values : Array < T >, index : number) : T {
  return values[index % values.length];
}

class IndexScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    title: '首页',
    // Note: By default the icon is only shown on
    // iOS. Search the showIcon option below.
    // tabBarIcon: ({ tintColor }) => (   <Image
    //  source={require('./chats-icon.png')}
    // style={[styles.icon, {tintColor:
    // tintColor}]}   /> ),
  };

  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      hidden: false
    };
  }
  render() {
    return (
      <View>
        <StatusBar backgroundColor={'#3b92e9'}  barStyle="light-content"/>
        <Text>List of Index</Text>
        <Button title='to detail' onPress={() => this.props.navigation.navigate('Detail', {name: 'Lucy'})}/>
      </View>
    )
  }
}
//backgroundColor={'#3b92e9'} animated={true} barStyle="light-content"
export default IndexScreen
