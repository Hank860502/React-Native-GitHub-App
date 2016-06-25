import React, { Component } from 'react';
import Profile from './Profile'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,

} from 'react-native'

class Dashboard extends Component{
  makeBackground(btn){
    var obj={
      flexDirection: 'row',
      alignSelf: 'stretch',
      flex: 1,
    }

    if(btn === 0){
      obj.backgroundColor = '#48BBEC';
    } else if(btn === 1){
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }

  goToProfile(){
    this.props.navigator.push({
      // title: res.name || "Seclect an Option",
      component: Profile,
      title: 'Profile',
      passProps: {userInfo: this.props.userInfo}
      // component: Dashboard,
    });
  }
  goToRepos(){
    console.log('Going to Repos page')
  }
  goToNotes(){
    console.log('Going to Notes page')
  }
  render(){
    return(
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },
  buttonText:{
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
  image: {
    height: 350,
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
})

export default Dashboard
