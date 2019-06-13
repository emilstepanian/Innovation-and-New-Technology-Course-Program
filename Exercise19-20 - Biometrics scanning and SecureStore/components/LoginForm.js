import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, TextInput, View, Button } from 'react-native';
import firebase from 'firebase';
import { Overlay } from 'react-native-elements';
import { SecureStore, LocalAuthentication } from 'expo';
import SignUpForm from './SignUpForm';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      hasLogin: true,
      waitForBiometrics: false
    };
  }

  async checkBiometricsRegistered() {
    let biometricsRegistered = "false";
    biometricsRegistered = await SecureStore.getItemAsync("biometricsRegistered");
    if (biometricsRegistered === "true") {
      this.setState({ waitForBiometrics: true })
      this.scanBiometrics();
    } else {
      alert("No biometrics registered. You cannot login with biometrics");
    }
  }

  async signIn() {
    const { email, password } = this.state;
    await SecureStore.setItemAsync('email', email);

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }

  onLoginSuccess(currentUser) {
    console.log(currentUser);
    this.setState({ email: '', password: '', loading: false, error: '', waitForBiometrics: false });
  }

  onLoginFail(err) {
    this.setState({ loading: false, error: err.message });
  }

  async scanBiometrics() {
    let result = await LocalAuthentication.authenticateAsync('Verifying biometrics.');
    if (result.success === true) {
      let email = await SecureStore.getItemAsync("email");
      let password = await SecureStore.getItemAsync("password");
      alert("Biometrics success");

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    } else {
      alert("biometrics failed");
      this.setState({ waitForBiometrics: false })

    }
  }


  render() {
    switch (this.state.hasLogin) {
      case true:
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
            {this.renderWaitForBiometrics()}
            <View>
              <Text>Sign in</Text>
              <TextInput
                label='Username'
                placeholder='user@mail.com'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput
                placeholder='password'
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
              />

              <Text style={styles.errorTextStyle}>
                {this.state.error}
              </Text>
              <Button title="Login with biometrics" onPress={this.checkBiometricsRegistered.bind(this)}></Button>
              {this.renderButton()}
              <Button title='Sign up' onPress={() => this.setState({ hasLogin: false })} />
            </View>
          </View>
        );
      case false: {
        return (
          <View>
            <SignUpForm />
            <Button title='go back' onPress={() => this.setState({ hasLogin: true })} />
          </View>
        )
      }
    }
  }

  renderWaitForBiometrics() {
    return (
      <Overlay
        height="auto"
        overlayStyle={{ justifyContent: 'center', alignItems: 'center' }}
        isVisible={this.state.waitForBiometrics}
        onBackdropPress={() => this.setState({ waitForBiometrics: false })}
      >
        <Text>Waiting for Biometrics</Text>
        <ActivityIndicator size='large'></ActivityIndicator>
      </Overlay>
    );
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='small' />
    }
    return (
      <Button title="Log in" onPress={this.signIn.bind(this)}>
      </Button>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});
