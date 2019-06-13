import React from 'react';
import { Button, Text, View, TextInput, ActivityIndicator } from 'react-native';

export default class BiometricAuthRegistrationScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      loading: false
    }
  }
  static navigationOptions = {
    title: "Biometrics Registration"
  };

  async verifyAccount() {
  }

  onAccountVerificationSuccess(credentials) {

  }

  onAccountVerificationFailure(error) {
    console.log(error);
    this.setState({ loading: false })
  }


  async scanBiometrics() {
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