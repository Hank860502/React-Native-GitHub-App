import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ScrollView,
} from 'react-native';
import Badge from './Badge'


class Profile extends Component {
  debugger;
  getRowTitle(user, item){ // Function that makes the key-names look nicer on the screen
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render(){
    var userInfo = this.props.userInfo;
    var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    var list = topicArr.map((item, index) => {
      if(!userInfo[item]){
        return <View key={index}/> //React uses the key to learn what changes in the list (must be unique!)
      } else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}> {this.getRowTitle(userInfo, item)} </Text>
              <Text style={styles.rowContent}> {userInfo[item]} </Text>
            </View>
          </View>
        )
      }
    });
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
        {list}
                {list}
      </ScrollView>
    )
  }
};

// Profile.propTypes = {
//   userInfo: React.PropTypes.object.isRequired
// }

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  },
});

export default Profile;
