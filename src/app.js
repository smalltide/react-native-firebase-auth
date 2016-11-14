import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC6SRauUqJVPUgLO43WQMhuFNMutTHaI0w',
      authDomain: 'react-native-auth-9196b.firebaseapp.com',
      databaseURL: 'https://react-native-auth-9196b.firebaseio.com',
      storageBucket: 'react-native-auth-9196b.appspot.com',
      messagingSenderId: '559965301438'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
         this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
