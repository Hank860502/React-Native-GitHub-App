import React, { Component } from 'react';

var api = {
  getBio(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    // Is the same as
    // var url = "https://api.github.com/users/" + username + "/repos"
    return fetch(url).then((response) => response.json()); // promise
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    // Is the same as
    // var url = "https://api.github.com/users/" + username + "/repos"
    return fetch(url).then((response) => response.json()); // promise
  }
};

export default api;
