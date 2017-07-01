import React from 'react';
import {View, Text, StatusBar} from 'react-native'
class Detail extends React.Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor={'#3b92e9'} barStyle="light-content" showHideTransition='slide'/>
        <Text>detail</Text>
      </View>
    )
  }
}

export default Detail
