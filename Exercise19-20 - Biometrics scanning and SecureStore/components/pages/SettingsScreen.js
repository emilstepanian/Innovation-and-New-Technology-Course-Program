import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';
import { LocalAuthentication } from 'expo';

export default class SettingsScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasBiometricsHardware: false,
      hasBiometricsRegistered: false
    }
  }

  static navigationOptions = {
    title: "Settings"
  };

  componentDidMount() {
    this.checkDeviceForHardware();
    this.checkForBiometrics();
  }

  async checkDeviceForHardware() {
    let hasBiometricsHardware = await LocalAuthentication.hasHardwareAsync();
    this.setState({ hasBiometricsHardware })
  }

  async checkForBiometrics() {
    let hasBiometricsRegistered = await LocalAuthentication.isEnrolledAsync();
    this.setState({ hasBiometricsRegistered })
  }


  async navigateToBiometricsAuthRegistration() {
    if (this.state.hasBiometricsHardware) {
      if (this.state.hasBiometricsRegistered) {
        this.props.navigation.navigate('BiometricAuthRegistration');
      } else {
        alert("No biometrics is registered");
      }
    } else {
      alert("No biometrics hardware detected");
    }

  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <Button
          title="Activate Biometrics"
          onPress={this.navigateToBiometricsAuthRegistration.bind(this)}
        />
        <Button title="Log Out" onPress={() => firebase.auth().signOut()}></Button>
      </View>
    );
  }
}