import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Box extends React.Component {

  constructor(props) {
    super(props);

    this.state= {
      title : "", 
      farve : "eksempel"
    }
  }

  render() {

    return (
      <Text>{this.state.title}</Text>
    );
  }
}


