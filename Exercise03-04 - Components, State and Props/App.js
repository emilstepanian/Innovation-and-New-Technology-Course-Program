import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Box from './components/Box';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      boxTitle : ''
    }
  }

  onButtonClick() {
        this._box.setState({
          title : this.state.boxTitle
        })
  }

  onTextChanged(value) {
    this.setState({
      boxTitle : value
    })
  }

  render() {
    return ( 
      <View style={styles.container}>
        <TextInput
           onChangeText={this.onTextChanged.bind(this)}></TextInput>
        <Button 
           title='Click me' 
           onPress={this.onButtonClick.bind(this)}/>

        <Box
          ref={component => this._box = component} />
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
  }
});



