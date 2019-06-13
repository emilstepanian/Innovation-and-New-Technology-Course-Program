import React from 'react';
import { Button, Text, View, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Overlay } from 'react-native-elements';
import firebase from 'firebase';

import { SecureStore, LocalAuthentication } from 'expo';

export default class BiometricAuthRegistrationScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      loading: false,
      waitForBiometrics: false
    }
  }
  static navigationOptions = {
    title: "Biometrics Registration"
  };

  async verifyAccount() {
    this.setState({ loading: true })
    const email = await SecureStore.getItemAsync('email');
    console.log("Email from SecureStore: " + email);
    const password = this.state.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAccountVerificationSuccess.bind(this))
      .catch(this.onAccountVerificationFailure.bind(this));
  }

  onAccountVerificationSuccess(credentials) {
    const currentUser = firebase.auth().currentUser;
    if (credentials.user.uid === currentUser.uid) {
      this.setState({ waitForBiometrics: true });
      this.scanBiometrics();
    }
  }

  onAccountVerificationFailure(error) {
    console.log(error);
    this.setState({ loading: false })
  }

  async scanBiometrics() {
    let result = await LocalAuthentication.authenticateAsync('Scanning your biometric.');
    if (result.success === true) {
      this.setState({ loading: false })
      alert("Biometric saved. You can now log in with your biometrics.");
      await SecureStore.setItemAsync("password", this.state.password);
      await SecureStore.setItemAsync("biometricsRegistered", "true");
      this.setState({ waitForBiometrics: false });
      this.props.navigation.goBack();

    } else {
      alert("Failed");
      this.setState({ waitForBiometrics: false });

    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
        {this.renderWaitForBiometrics()}
        <Text>Verify account</Text>
        <View>
          <TextInput
            label='Password'
            placeholder='Password'
            value={this.state.title}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        {this.renderVerifyButton()}
      </View>
    );
  }

  renderWaitForBiometrics() {
    return (
      <Overlay
        height="auto"
        overlayStyle={{ justifyContent: 'center', alignItems: 'center' }}
        isVisible={this.state.waitForBiometrics}
        onBackdropPress={() => this.setState({ waitForBiometrics: false })}
      >
        <Text>Waiting for biometrics</Text>
        <ActivityIndicator size='large'></ActivityIndicator>
      </Overlay>
    )

  }
  renderVerifyButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='small' />
    }
    return (
      <Button title='Verify' onPress={this.verifyAccount.bind(this)} />
    );
  }

}