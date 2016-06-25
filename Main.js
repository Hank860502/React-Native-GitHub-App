import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import api from './api.js'
import Dashboard from './Dashboard.js'

class Main extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  handleSubmit(){
    // update indicatorIOS spinner
    // fetch data from Github
    // reroute to the next passing the Github information
    this.setState({
      isLoading: true
    });
    api.getBio(this.state.username)
      .then((response) => {
        if(response.message === 'Not Found'){
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        } else {
          console.log(response)
          this.props.navigator.push({
            title: 'Dashboard' || "Select an Option",
            // component: Dashboard,
            passProps: {userInfo: response}
          });
          this.setState({
            isLoading: false,
            error: false,
            username: '',
          })
        }
      })
  }

  render() {

    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    )

    var spinnerAnimation = <ActivityIndicator
                              animating={this.state.isLoading}
                              color='#111'
                              size='large'>
                            </ActivityIndicator>

    var showSpinner = (
      this.state.isLoading ? spinnerAnimation : console.log('Fail')
    )

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a GitHub User </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor='white'>
            <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
        {showSpinner}
        {showErr}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#0a95d0',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
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
    justifyContent: 'center',
  },
});

export default Main;
