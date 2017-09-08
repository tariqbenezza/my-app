import React from 'react';
import About from './components/About'
import Search from './components/Search'
import {View, StatusBar} from 'react-native'
import {TabNavigator} from 'react-navigation'

const Tabs = TabNavigator({
  Search:{screen: Search},
  About: {screen : About}
},{
  tabBarPosition:'bottom',
  tabBarOptions:{
    showIcon:true,
    showLabel:false,
    indicatorStyle:{
      height:2,
      backgroundColor:"#FFFFFF"
    },
    style:{
      backgroundColor:"#A2273C",
      borderTopWidth:1,
      borderColor:"#3F101C"
    }
  }
})

export default class App extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true}/>
        <Tabs />
      </View>
    );
  }
}
