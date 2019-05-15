import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';

import {
  StyleSheet, View, TextInput, Text,
} from 'react-native';

export default class QrCode extends Component {
  state = {
    text: 'https://github.com/mateuslouback',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>QR Code Generator</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Digite o conteúdo do QRcode"
        />
        <QRCode value={this.state.text} size={200} bgColor="#715CBE" fgColor="#F0F4FA" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F0F4FA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '900',
    color: '#715CBE',
  },

  input: {
    height: 45,
    width: '100%',
    fontSize: 14,
    borderColor: '#715CBE',
    color: '#715CBE',
    fontWeight: 'bold',
    borderWidth: 1,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 2,
    paddingHorizontal: 10,
  },
});
