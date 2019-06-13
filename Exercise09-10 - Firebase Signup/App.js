import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);
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
  }
  render() {
    return (
      <View style={styles.container}>
      <SignUpForm />
      </View>
    );
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