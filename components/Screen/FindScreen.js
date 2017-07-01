import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  FlatList
} from 'react-native';
class FindScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '发现',
    title: '发现',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };
  render() {
    let imgArr = [];
    for (let i = 0; i < 10; i++) {
      imgArr.push(
        <View key={i}>
          <Image style={styles.image} resizeMode='contain' source={require('../../img/123.jpg')}/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View>
          {imgArr}
        </View>
      </ScrollView>
    )
  }
}
var styles = StyleSheet.create({
  container: {
  //  paddingTop:10,
  },
  image: {
    width: '100%',
    marginTop: 10
  }
});

export default FindScreen
