import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'
import Clipboard from 'expo-clipboard'

import BlockIcon from './src/img/blocIcon.png'

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'

export default function App() {

  const [password, setPassword] = useState('')
  const [size, setSize] = useState(10)

  const handlerGenerator = () => {
    let pass = ''
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass);
  }

  const handlerStyles = (password) => {
    if (password !== '') {
      return styles.textGeneratorView
    } else {
      return styles.textGeneratorOpacity
    }
  }
  const handlerCopyString = () => {
    Clipboard.setString(password)
    alert('Senha copiada com sucesso')
  }

  return (
    <View style={styles.container}>
      <Image source={BlockIcon} style={styles.imageIcon} />
      <Text style={styles.textCaracter} >{size} Caracters</Text>
      <View
        style={styles.areaSlider}
      >
        <Slider
          style={{ height: 50, width: '100%' }}
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor={"#FF0000"}
          maximumTrackTintColor={"#000"}
        />
      </View>
      <View
        style={styles.buttonGeneratorView}
      >
        <TouchableOpacity
          style={styles.buttonGenerator}
          onPress={handlerGenerator}
        >
          <Text style={styles.textButton}>GERAR SENHA</Text>
        </TouchableOpacity>

        <View style={handlerStyles(password)}>
          <TouchableOpacity
            onPress={handlerCopyString}
          >
            <Text style={styles.textGenerator}>{password}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    height: 180,
    width: 180
  },
  areaSlider: {
    backgroundColor: '#fafafa',
    borderRadius: 15,
    width: '80%',
    elevation: 5,
    marginBottom: 10
  },
  buttonGeneratorView: {
    width: '80%',
    marginTop: 30,
    justifyContent: 'center'
  },
  buttonGenerator: {
    marginTop: 20,
    height: 60,
    width: '100%',
    backgroundColor: '#EB6E23',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 8
  },
  textButton: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  textGeneratorOpacity: {
    height: 50,
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    elevation: 5,
    opacity: 0
  },
  textGeneratorView: {
    height: 50,
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    elevation: 5,
  },
  textGenerator: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textCaracter: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 15
  }
});
