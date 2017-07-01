import {TabNavigator} from 'react-navigation';
import IndexScreen from '../Screen/IndexScreen'
import FindScreen from '../Screen/FindScreen'
import HomeScreen from '../Screen/HomeScreen'

const MyTabNavigator = TabNavigator({
  Index: {
    screen: IndexScreen
  },
  Find: {
    screen: FindScreen
  },
  My: {
    screen: HomeScreen
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  lazy: false,
  tabBarOptions: {
    pressColor: '#ddd',
    indicatorStyle: {
      backgroundColor: 'transparent'
    },
    labelStyle: {
      fontSize: 15
    },
    activeTintColor: '#3b92e9',
    inactiveTintColor: '#666',
    style: {
      backgroundColor: '#f9f9f9'
    }
  }
});

// MyTabNavigator.navigationOptions = {
// title: '首页' };

export default MyTabNavigator
