import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC6SRauUqJVPUgLO43WQMhuFNMutTHaI0w',
      authDomain: 'react-native-auth-9196b.firebaseapp.com',
      databaseURL: 'https://react-native-auth-9196b.firebaseio.com',
      storageBucket: 'react-native-auth-9196b.appspot.com',
      messagingSenderId: '559965301438'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
