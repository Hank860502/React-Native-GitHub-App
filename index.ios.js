/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 // var React = require('react-native');
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
} from 'react-native';

import Main from './Main';
import Dashboard from './Dashboard';
import Profile from './Profile';

var NavigationBarRouteMapper = {
  LeftButton: function( route, navigator, index, navState ){
    return(
      <Text>{ route.leftButton }</Text>
    )
  },
  Title: function( route, navigator, index, navState ){
    return(
      <Text>{ route.title }</Text>
    )
  },
  RightButton: function( route, navigator, index, navState ){
    return(
      <Text>{ route.rightButton }</Text>
    )
  }
}



class hank extends Component {

  renderScene(route, navigator){
    if (route.title === 'Github Notetaker'){
      return <Main navigator={navigator} />
    } else if (route.title === 'Dashboard'){
      return <Dashboard navigator={navigator} {...route.passProps} />
    } else if (route.title === 'Profile'){
      return <Profile navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute= {{title: 'Github Notetaker'}}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={ NavigationBarRouteMapper }
          />
        }
        />
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('hank', () => hank);
