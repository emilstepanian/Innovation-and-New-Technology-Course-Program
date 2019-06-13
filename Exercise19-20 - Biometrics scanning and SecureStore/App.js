import React from 'react';
import { StyleSheet, ActivityIndicator , Text, View } from 'react-native';
import LoginForm from './components/LoginForm';
import Home from './components/pages/Home';
import firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    }
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCHCtAyhTZ0uEsgicB5gza4ILlKBUlmwEo",
      authDomain: "exercise09-10.firebaseapp.com",
      databaseURL: "https://exercise09-10.firebaseio.com",
      projectId: "exercise09-10",
      storageBucket: "exercise09-10.appspot.com",
      messagingSenderId: "65876806089"
      });

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.container}>
            <Home/>
          </View>
        );
      case false:
        return (
          <View style={styles.container}>
          <LoginForm />
          </View>
        );
      default:
        return <ActivityIndicator size="large" />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});